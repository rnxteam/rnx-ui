/**
 * @component RefreshView
 * @version 0.17.0
 * @description 滚动框
 * 带惯性、下拉刷新功能。官版的 ScrollView 下拉刷新的功能几乎没有可定制空间，而 RefreshView 可以对 RefreshControl 进行完全的自定义，
 * 包括控件的本身，下拉状态的实时响应等，具有极大的可定制空间。
 *
 * 配套组件：[RefreshControl](./RefreshControl/README.md)
 *
 * @instructions {instruInfo: ./RefreshView/RefreshView.md}
 */
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


    this.y = 0;

    this.innerLen = 0;

    this.outerLen = 0;

    this.scrollBarContainerLen = 0;

    this.refreshControlHeight = 0;
    this.RCOnReadyToRefreshLock = false;

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
        clearInterval(this.intervalId);
        clearInterval(this.refreshControlIntervalId);
        return false;
      },
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const res = gestureState.dy !== 0;
        return res;
      },
      onPanResponderMove: (evt, gestureState) => {
        const { dy } = gestureState;
        const dragOverA = this.props.dragOverA;
        const topThreshold = this.getTopThreshold();
        const y = this.y;
        let p = y + dy;

        if (p > topThreshold) {
          const p0 = this.lastRefreshControlStatus === 0 ? 0 : topThreshold;
          p = p0 + ((p - p0) / dragOverA);


          const refreshControl = this.props.refreshControl;
          if (refreshControl) {
            if (p >= this.props.refreshDistance) {
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
            p = d + ((p - d) / dragOverA);
          }
        }

        this.position(p);
      },
      onPanResponderRelease: (evt, gestureState) => {
        const { vy } = gestureState;
        const topThreshold = this.getTopThreshold();
        const y = this.state.y;
        this.y = y;

        if (y > topThreshold) {
          let s = y - topThreshold;
          if (this.refreshControlStatus !== 2 && y >= this.props.refreshDistance) {
            s = y - this.refreshControlHeight;
            if (this.props.refreshControl && this.props.refreshControl.props.onRefresh) {
              this.refreshControlStatus = 2;
              this.props.refreshControl.props.onRefresh();
            }
          }
          this.recover(s);
        } else {
          const d = this.outerLen - this.innerLen;
          if (y < d) {
            if (d < 0) {
              this.recover(y - d);
            } else {
              this.recover(y);
            }
          } else {
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


  setPosition(p) {
    this.y = p;
    this.position(p);
  }


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


  inertialScroll(initalV) {
    const t = this.props.renderInterval;
    const towards = initalV > 0 ? 1 : -1;

    let v = Math.abs(initalV);
    let n = 0;

    const vMaker = new InertiallyDecreasingSpead(v);

    this.intervalId = setInterval(() => {
      n += 1;
      v = vMaker.getV(n * t);


      if (v < 0.07) {
        clearInterval(this.intervalId);
        return;
      }

      let p = this.state.y + (towards * v * t);
      const topThreshold = this.getTopThreshold();

      if (p > topThreshold) {
        p = topThreshold;
        clearInterval(this.intervalId);
        this.overScroll(v, towards);
      } else {
        const d = this.outerLen - this.innerLen;
        if (p < d) {
          p = d;
          clearInterval(this.intervalId);
          this.overScroll(towards * v, towards);
        }
      }

      this.setPosition(p);
    }, t);
  }


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
        clearInterval(this.intervalId);
        this.recover(this.y - this.getTopThreshold());
        return;
      } else if (towards === -1 && v >= 0) {
        clearInterval(this.intervalId);
        const d = this.outerLen - this.innerLen;
        this.recover(this.y - d);
        return;
      }

      const s = v * t;
      this.setPosition(this.state.y + s);
    }, t);
  }


  recover(S) {
    if (S === 0) {
      return;
    }

    const t = this.props.renderInterval;
    const T = this.props.recoverTime;
    const N = Math.floor(T / t);
    let n = 0;

    this.intervalId = setInterval(() => {
      if (n >= N) {
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

  showScrollBar() {
    this.aniHideScrollBar.stop();
    this.aniShowScrollBar.start();
  }


  hideScrollBar() {
    this.aniShowScrollBar.stop();
    this.aniHideScrollBar.start();
  }


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

  renderScrollBar(thisY) {
    if (this.innerLen <= this.outerLen) {
      return;
    }

    this.showScrollBar();

    const maxLen = this.scrollBarContainerLen;

    let contentLen = this.innerLen;

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
     * @description 计算滚动条高度
     */
    if (y > 0) {
      contentLen += y;
    } else if (y < d) {
      contentLen = containerLen - y;
    }

    const p = containerLen / contentLen;

    if (p >= 1) {
      len = maxLen;
    } else {
      len = p * maxLen;
    }

    /**
     * @description 计算滚动条位置
     */
    if (p >= 1) {
      top = 0;
    } else {
      const maxTop = maxLen - len;

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
  /**
   * @property onScroll
   * @type Function
   * @default NOOP
   * @description  滚动回调，参数为滚动距离
   */
  onScroll: PropTypes.func,
  /**
   * @property onEndReachedThreShold
   * @type Number
   * @default 0
   * @description  调用 onEndReached 之前的临界值，描述距底部的距离
   */
  onEndReachedThreshold: PropTypes.number,
  /**
   * @property onEndReached
   * @type Function
   * @default NOOP
   * @description  当滚动至距离底部 onEndReachedThreshold 的范围内，会持续触发的回调
   */
  onEndReached: PropTypes.func,
  /**
   * @property overA
   * @type Number
   * @default 0.05
   * @description  超出范围时的减速度
   */
  overA: PropTypes.number,
  /**
   * @property maxOverV
   * @type Number
   * @default 3
   * @description  超出范围时最大速度
   */
  maxOverV: PropTypes.number,
  /**
   * @property dragOverA
   * @type Number
   * @default 2.5
   * @description  拖拽超出范围时的减速度
   */
  dragOverA: PropTypes.number,
   /**
   * @property renderInterval
   * @type Number
   * @default 16
   * @description  渲染间隔时间
   */
  renderInterval: PropTypes.number,
  /**
   * @property recoverTime
   * @type Number
   * @default 200
   * @description  弹性恢复时间
   */
  recoverTime: PropTypes.number,
  /**
   * @property refreshControlRecoverTime
   * @type Number
   * @default 100
   * @description  刷新控件恢复时间
   */
  refreshControlRecoverTime: PropTypes.number,
  /**
   * @property refreshDistance
   * @type Number
   * @default 60
   * @description  刷新控件恢复时间
   */
  refreshDistance: PropTypes.number,
  /**
   * @property refreshControl
   * @type Function
   * @default null
   * @description  下拉刷新控件
   */
  refreshControl: (props, propName, componentName) => {
    const type = props[propName].type;
    if (!type || type !== RefreshControl) {
      throw new Error(
        `${componentName}'s props \`refreshControl\` should be an instance of \`RefreshControl\``
      );
    }
  },
  /**
   * @property children
   * @type Element Array
   * @default null
   * @description  子元素
   */
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
