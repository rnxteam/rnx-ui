import React, {
  Component,
  PropTypes,
} from 'react';
import {
  View,
  PanResponder,
  Animated,
} from 'react-native';

import RefreshControl from './RefreshControl';
import InertiallyDecreasingSpead from './InertiallyDecreasingSpead';
import styles from './styles.js';

const NOOP = () => {};

class RefreshView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false,
      isLoading: false,
      y: 0,
      scrollBarLen: 50,
      scrollBarY: 0,
      scrollBarOpacity: new Animated.Value(0),
      refreshControlY: 0,
    };

    // 滚动坐标
    this.y = 0;
    // 内部容器长度
    this.innerLen = 0;
    // 外部容器长宽
    this.outerLen = 0;
    // 滚动条容器长宽
    this.scrollBarContainerLen = 0;
    // 刷新控件高度
    this.refreshControlHeight = 0;
    this.RCOnReadyToRefreshLock = false;
    /**
     * 刷新控件状态
     * 0: 「下拉刷新」初始状态，可下拉
     * 1: 「松开刷新」下拉距离到达刷新点
     * 2: 「刷新中...」正在刷新
     * @type {Number}
     */
    this.refreshControlStatus = 0;
    this.lastRefreshControlStatus = 0;

    this.aniShowScrollBar = Animated.timing(this.state.scrollBarOpacity, {
      toValue: 1,
      duration: 0,
    });
    this.aniHideScrollBar = Animated.timing(this.state.scrollBarOpacity, {
      toValue: 0,
      duration: 200,
      delay: 300,
    });

    this.onInnerLayout = this.onInnerLayout.bind(this);
    this.onOuterLayout = this.onOuterLayout.bind(this);
    this.onScrollBarContainerLayout = this.onScrollBarContainerLayout.bind(this);
    this.onRefreshControlLayout = this.onRefreshControlLayout.bind(this);
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        // 触摸时立刻停止当前动作
        clearInterval(this.intervalId);
        clearInterval(this.refreshControlIntervalId);
        return false;
      },
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // 冒泡劫持
        // 本来应该直接 return true 劫持
        // 但是 iPhone 6s 及其以上版本有 bug，会导致子组件无法响应事件
        // （很奇怪，在冒泡阶段，子组件响应事件的时机应该在父组件之前）
        // https://github.com/facebook/react-native/issues/3082
        const res = gestureState.dy !== 0;
        return res;
      },
      onPanResponderMove: (evt, gestureState) => {
        // 开始移动
        const { dy } = gestureState;
        const dragOverA = this.props.dragOverA;
        const topThreshold = this.getTopThreshold();
        const y = this.y;
        let p = y + dy;

        if (p > topThreshold) {
          // 超出顶部范围，触发减速
          const p0 = this.lastRefreshControlStatus === 0 ? 0 : topThreshold;
          p = p0 + ((p - p0) / dragOverA);

          // 处理下拉刷新逻辑
          const refreshControl = this.props.refreshControl;
          if (refreshControl) {
            if (p >= this.props.refreshDistance) {
              // 到达刷新点
              if (this.refreshControlStatus === 0 && refreshControl.props.onReadyToRefresh) {
                this.refreshControlStatus = 1;
                this.props.refreshControl.props.onReadyToRefresh();
              }
            } else {
              if (this.refreshControlStatus === 1 && refreshControl.props.onPull) {
                this.refreshControlStatus = 0;
                this.props.refreshControl.props.onPull();
              }
              if (this.refreshControlStatus === 0 && refreshControl.props.onPulling) {
                this.props.refreshControl.props.onPulling(p);
              }
            }
          }
        } else {
          const d = this.outerLen - this.innerLen;
          if (p < d) {
            // 超出底部范围，触发减速
            p = d + ((p - d) / dragOverA);
          }
        }

        this.position(p);
      },
      onPanResponderRelease: (evt, gestureState) => {
        // 停止移动
        const { vy } = gestureState;
        const topThreshold = this.getTopThreshold();
        const y = this.state.y;
        this.y = y;

        if (y > topThreshold) {
          // 超出顶部范围，触发回弹
          let s = y - topThreshold;
          if (this.refreshControlStatus !== 2 && y >= this.props.refreshDistance) {
            // 到达刷新点
            s = y - this.refreshControlHeight;
            if (this.props.refreshControl && this.props.refreshControl.props.onRefresh) {
              this.refreshControlStatus = 2;
              this.props.refreshControl.props.onRefresh();
            }
          }
          this.recover(s);
        } else {
          // 超出底部范围，触发回弹
          const d = this.outerLen - this.innerLen;
          if (y < d) {
            if (d < 0) {
              this.recover(y - d);
            } else {
              this.recover(y);
            }
          } else {
            // 判定没有超出范围，触发惯性
            this.inertialScroll(vy);
          }
        }

        this.lastRefreshControlStatus = this.refreshControlStatus;
      },
    });
  }

  componentWillReceiveProps(nextProps) {
    const prevRefreshControl = this.props.refreshControl;
    const nextRefreshControl = nextProps.refreshControl;
    if (prevRefreshControl && nextRefreshControl) {
      const prevRefreshing = prevRefreshControl.props.refreshing;
      const nextRefreshing = nextRefreshControl.props.refreshing;

      if (prevRefreshing === true && nextRefreshing === false) {
        // * 0: 「下拉刷新」初始状态，可下拉
        // * 1: 「松开刷新」下拉距离到达刷新点
        // * 2: 「刷新中...」正在刷新
        // 2「刷新中...」结束，进入 0
        this.refreshControlStatus = 0;
        this.lastRefreshControlStatus = 0;
        this.refreshControlRecover();
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  onOuterLayout(e) {
    this.outerLen = e.nativeEvent.layout.height;
  }

  onInnerLayout(e) {
    this.innerLen = e.nativeEvent.layout.height;
  }

  onScrollBarContainerLayout(e) {
    this.scrollBarContainerLen = e.nativeEvent.layout.height;
  }

  onRefreshControlLayout(e) {
    const height = e.nativeEvent.layout.height;
    this.refreshControlHeight = height;
    this.setState({
      refreshControlY: -height,
    });
  }

  onScroll(p) {
    this.props.onScroll(p);
    this.checkEndReached(p);
  }

  getTopThreshold() {
    if (this.refreshControlStatus !== 0) {
      return this.refreshControlHeight;
    }
    return 0;
  }

  // 定位
  setPosition(p) {
    this.y = p;
    this.position(p);
  }

  // 检查 onEndReached 触发时机
  checkEndReached(p) {
    const distanceToBottom = (this.innerLen - this.outerLen) + p;
    if (distanceToBottom <= this.props.onEndReachedThreshold) {
      this.props.onEndReached();
    }
  }

  position(p) {
    this.onScroll(p);
    this.setState({
      y: p,
    });
    this.renderScrollBar(p);
  }

  // 惯性滚动
  inertialScroll(initalV) {
    const t = this.props.renderInterval;
    const towards = initalV > 0 ? 1 : -1;

    let v = Math.abs(initalV);
    let n = 0;

    const vMaker = new InertiallyDecreasingSpead(v);

    this.intervalId = setInterval(() => {
      n += 1;
      v = vMaker.getV(n * t);

      // 趋近于 0，取 0
      if (v < 0.07) {
        clearInterval(this.intervalId);
        return;
      }

      let p = this.state.y + (towards * v * t);
      const topThreshold = this.getTopThreshold();

      if (p > topThreshold) {
        // 到达顶部，停止惯性，进入超出范围滚动
        p = topThreshold;
        clearInterval(this.intervalId);
        this.overScroll(v, towards);
      } else {
        const d = this.outerLen - this.innerLen;
        if (p < d) {
          // 到达底部，停止惯性，进入超出范围滚动
          p = d;
          clearInterval(this.intervalId);
          this.overScroll(towards * v, towards);
        }
      }

      this.setPosition(p);
    }, t);
  }

  // 超出范围滚动
  // v = initalV - a*t
  overScroll(initalV, towards = 1) {
    const maxOverV = this.props.maxOverV;
    let v0;

    if (initalV > maxOverV) {
      v0 = maxOverV;
    } else if (initalV < -maxOverV) {
      v0 = -maxOverV;
    } else {
      v0 = initalV;
    }

    const t = this.props.renderInterval;
    const a = this.props.overA;
    let n = 0;
    let v = v0;

    this.intervalId = setInterval(() => {
      n += 1;
      v = v0 - (towards * (a * n * t));
      if (towards === 1 && v <= 0) {
        // 向下，速度降为 0
        clearInterval(this.intervalId);
        this.recover(this.y - this.getTopThreshold());
        return;
      } else if (towards === -1 && v >= 0) {
        // 向上，速度降为 0
        clearInterval(this.intervalId);
        const d = this.outerLen - this.innerLen;
        this.recover(this.y - d);
        return;
      }

      const s = v * t;
      this.setPosition(this.state.y + s);
    }, t);
  }

  // 超出范围后恢复
  recover(S) {
    if (S === 0) {
      return;
    }

    // const towards = S > 0 ? 1 : -1;
    const t = this.props.renderInterval;
    const T = this.props.recoverTime;
    const N = Math.floor(T / t);
    let n = 0;

    this.intervalId = setInterval(() => {
      if (n >= N) {
        // 按理来说，此时滚动位置已经到达目标位置
        // 保险其间，再强制到达目标位置
        // if (towards === 1) {
        //   // 向下滚动超出顶部，需要回到顶部
        //   this.setPosition(0);
        // } else {
        //   // 向上滚动超出底部，需要回到底部
        //   const d = this.outerLen - this.innerLen;
        //   this.setPosition(d);
        // }
        clearInterval(this.intervalId);
        return;
      }

      n += 1;

      const v = ((2 * S) / T) * (1 - (((n - 0.5) * t) / T));
      const s = v * t;
      const p = this.y - s;

      this.setPosition(p);
    }, t);
  }

  // 显示滚动条
  showScrollBar() {
    this.aniHideScrollBar.stop();
    this.aniShowScrollBar.start();
  }

  // 隐藏滚动条
  hideScrollBar() {
    this.aniShowScrollBar.stop();
    this.aniHideScrollBar.start();
  }

  // 刷新控件恢复
  refreshControlRecover() {
    const y = this.y;
    let S = y;
    if (y <= 0) {
      return;
    } else if (y > this.refreshControlHeight) {
      S = this.refreshControlHeight;
    }

    const t = this.props.renderInterval;
    const T = this.props.refreshControlRecoverTime;
    const N = Math.floor(T / t);
    let n = 0;

    this.refreshControlIntervalId = setInterval(() => {
      if (n >= N) {
        // 按理来说，此时滚动位置已经到达目标位置
        // 保险其间，再强制到达目标位置
        // if (towards === 1) {
        //   // 向下滚动超出顶部，需要回到顶部
        //   this.setPosition(0);
        // } else {
        //   // 向上滚动超出底部，需要回到底部
        //   const d = this.outerLen - this.innerLen;
        //   this.setPosition(d);
        // }
        clearInterval(this.refreshControlIntervalId);
        return;
      }

      n += 1;

      const v = ((2 * S) / T) * (1 - (((n - 0.5) * t) / T));
      const s = v * t;
      const p = this.y - s;

      this.setPosition(p);
    }, t);
  }

  // 计算滚动条长度
  renderScrollBar(thisY) {
    if (this.innerLen <= this.outerLen) {
      return;
    }
    // 显示滚动条
    this.showScrollBar();

    const maxLen = this.scrollBarContainerLen;
    // 内容长度
    let contentLen = this.innerLen;
    // 容器长度
    const containerLen = this.outerLen;
    const d = containerLen - contentLen;
    let len;
    let top;

    let y;
    if (typeof thisY === 'number') {
      y = thisY;
    } else {
      y = this.y;
    }

    /**
     * 计算滚动条高度
     */
    if (y > 0) {
      contentLen += y;
    } else if (y < d) {
      contentLen = containerLen - y;
    }
    // 长度比例
    const p = containerLen / contentLen;

    if (p >= 1) {
      len = maxLen;
    } else {
      len = p * maxLen;
    }

    /**
     * 计算滚动条位置
     */
    if (p >= 1) {
      top = 0;
    } else {
      const maxTop = maxLen - len;
      // 位置比例
      let pTop = y / d;
      if (pTop < 0) {
        pTop = 0;
      } else if (pTop > 1) {
        pTop = 1;
      }
      top = maxTop * pTop;
    }

    this.setState({
      scrollBarLen: len,
      scrollBarY: top,
    });

    // 隐藏滚动条
    this.hideScrollBar();
  }

  render() {
    return (
      <View
        style={[styles.outer]}
        {...this.panResponder.panHandlers}
        onLayout={this.onOuterLayout}
      >
        <View
          style={[styles.inner, {
            transform: [{
              translateY: this.state.y,
            }],
          }]}
          onLayout={this.onInnerLayout}
        >
          <View
            style={[styles.refreshControlContainer, {
              top: this.state.refreshControlY,
            }]}
            onLayout={this.onRefreshControlLayout}
          >
            {this.props.refreshControl}
          </View>
          {this.props.children}
        </View>
        <View
          style={[styles.scrollBarContainer]}
          onLayout={this.onScrollBarContainerLayout}
        >
          <Animated.View
            style={[styles.scrollBar, {
              height: this.state.scrollBarLen,
              top: this.state.scrollBarY,
              opacity: this.state.scrollBarOpacity,
            }]}
          />
        </View>
      </View>
    );
  }
}

RefreshView.propTypes = {
  // 滚动回调，参数为滚动距离
  onScroll: PropTypes.func,
  // 调用 onEndReached 之前的临界值，描述距底部的距离
  onEndReachedThreshold: PropTypes.number,
  // 当滚动至距离底部 onEndReachedThreshold 的范围内，会持续触发的回调
  onEndReached: PropTypes.func,
  // 超出范围时的减速度
  overA: PropTypes.number,
  // 超出范围时最大速度
  maxOverV: PropTypes.number,
  // 拖拽超出范围时的减速度
  dragOverA: PropTypes.number,
  // 渲染间隔时间
  renderInterval: PropTypes.number,
  // 弹性恢复时间
  recoverTime: PropTypes.number,
  // 刷新控件恢复时间
  refreshControlRecoverTime: PropTypes.number,
  // 到达刷新状态所需的距离
  refreshDistance: PropTypes.number,
  // 下拉刷新控件
  refreshControl: (props, propName, componentName) => {
    const type = props[propName].type;
    if (!type || type !== RefreshControl) {
      throw new Error(
        `${componentName}'s props \`refreshControl\` should be an instance of \`RefreshControl\``
      );
    }
  },
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
RefreshView.defaultProps = {
  onScroll: NOOP,
  onEndReachedThreshold: 0,
  onEndReached: NOOP,
  overA: 0.05,
  maxOverV: 3,
  dragOverA: 2.5,
  renderInterval: 16,
  recoverTime: 200,
  refreshControlRecoverTime: 100,
  refreshDistance: 60,
  refreshControl: null,
  children: null,
};

export {
  RefreshControl,
};
export default RefreshView;
