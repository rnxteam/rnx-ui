import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  PanResponder,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});

const NOOP = () => {};

class CardView extends Component {
  constructor(props) {
    super(props);

    props.getEl(this);

    // 滚动坐标
    this.x = 0;
    // 每张卡片所占空间宽度
    this.cardSpaceWidth = props.cardWidth + props.cardGap;
    // 第一个卡片到左边距离
    this.innerPaddingLeft = (Dimensions.get('window').width - props.cardWidth) / 2;
    // 卡片数量
    this.cardsQuantity = props.cards.length;
    // 当前所在卡片
    this.currentIndex = 0;
    // 当前激活卡片
    this.activeIndex = 0;

    this.aniScrollTo = this.aniScrollTo.bind(this);

    this.state = {
      x: 0,
    };

    this.scaleArr = props.cards.map((item, index) => {
      if (this.currentIndex === index) {
        return 1;
      }
      return 1 - this.props.scaleCoefficient;
    });
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => (
        // PanResponder blocking child Touchable on 6s
        // https://github.com/facebook/react-native/issues/3082#issuecomment-191338207
        gestureState.dx !== 0
      ),
      onPanResponderGrant: this.props.onPanResponderGrant,
      onPanResponderMove: (evt, gestureState) => {
        // console.log('Move');
        // 开始移动
        const { dx } = gestureState;
        const x = this.x + dx;
        this.setPosition(x);
      },
      onPanResponderRelease: (a, gestureState) => {
        this.props.onPanResponderRelease();
        // console.log('Release');
        // 停止移动
        const x = this.state.x;
        this.x = x;

        let nextCardIndex;
        const minGestureDistance = this.props.minGestureDistance;

        if (typeof minGestureDistance === 'number') {
          if (gestureState.dx > minGestureDistance) {
            nextCardIndex = this.activeIndex - 1;
          } else if (gestureState.dx < -minGestureDistance) {
            nextCardIndex = this.activeIndex + 1;
          }
        }

        this.scrollTo(nextCardIndex);
      },
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cards.length !== this.props.cards.length) {
      this.cardsQuantity = nextProps.cards.length;

      const scaleArr = nextProps.cards.map((item, index) => {
        const currentScale = this.scaleArr[index];
        if (typeof currentScale === 'number') {
          return currentScale;
        } else if (this.currentIndex === index) {
          return 1;
        }
        return 1 - this.props.scaleCoefficient;
      });

      this.scaleArr = scaleArr;

      if (this.currentIndex >= this.cardsQuantity) {
        // 如果当前所在位置超过了新的卡片长度，跳到最后去
        this.scrollTo(this.cardsQuantity - 1);
      }
    }
  }

  /**
   * 计算坠近的卡片
   * @return {[type]} [description]
   *
   * closestCardIndex = (-x + cardGap/2 + cardWidth/2)/(cardGap + cardWidth)
   */
  getClosestCard() {
    let res = Math.floor(0.5 - (this.x / this.cardSpaceWidth));
    if (res < 0) {
      res = 0;
    } else if (res >= this.cardsQuantity) {
      res = this.cardsQuantity - 1;
    }

    return res;
  }

  // 定位
  setPosition(x) {
    // console.log(x);
    // if (x > 80) {
    //   return;
    // }

    // 当前所在区域
    const currentIndex = Math.floor(Math.abs(x / this.cardSpaceWidth));

    if (this.currentIndex !== currentIndex) {
      this.currentIndex = currentIndex;
      this.props.onPass(currentIndex);
    }

    this.scaleArr = this.scaleArr.map((item, index) => {
      let k = Math.abs(index + (x / this.cardSpaceWidth));
      if (k > 1) {
        k = 1;
      }
      return 1 - (k * this.props.scaleCoefficient);
    });

    this.setState({
      x,
    });
  }

  // 滚动到卡片，默认是坠近的
  scrollTo(index, animation = true) {
    clearTimeout(this.timeoutId);
    // console.log('[scrollTo] start');
    const maxIndex = this.props.maxIndex;
    let targetIndex = this.getClosestCard();

    if (!animation) {
      targetIndex = index;
    } else {
      // 长距离拖动锁定最近
      if (this.activeIndex === targetIndex) {
        if (typeof index === 'number') {
          targetIndex = index;
        }
      }
    }

    if (typeof maxIndex === 'number') {
      if (targetIndex > maxIndex) {
        targetIndex = maxIndex;
      }
    }

    if (targetIndex >= this.cardsQuantity) {
      // console.warn(`Target card index ${targetIndex} is greater than cards
      //  quantity ${this.cardsQuantity}`);
      this.props.onEndReached();
      targetIndex = this.cardsQuantity - 1;
    } else if (targetIndex < 0) {
      // console.warn(`Target card index ${targetIndex} is less than 0`);
      this.props.onStartReached();
      targetIndex = 0;
    } else if (this.cardsQuantity < 0) {
      // console.warn(`Target card index ${targetIndex} must not be less than 0`);
      return;
    }

    this.activeIndex = targetIndex;
    this.props.onChange(targetIndex);
    this.targetX = -(targetIndex * this.cardSpaceWidth);

    if (animation) {
      // 使用动画
      const v = (Math.abs(this.currentIndex - targetIndex) + 1) * this.props.v;
      this.aniScrollTo(v);
    } else {
      // 不使用动画
      this.x = this.targetX;
      this.setPosition(this.targetX);
    }
  }
  // 动画：滚动到卡片
  aniScrollTo(v) {
    const D = this.targetX - this.x;
    let d;

    if (D >= v) {
      d = v;
    } else if (D < v && D > 0) {
      d = D;
    } else if (D === 0) {
      return;
    } else if (D < 0 && D > -v) {
      d = D;
    } else {
      d = -v;
    }

    const x = this.x + d;
    this.x = x;
    this.setPosition(x);
    this.timeoutId = setTimeout(() => {
      this.aniScrollTo(v);
    }, 16);
  }

  render() {
    return (
      <View
        style={this.props.style}
        {...this.panResponder.panHandlers}
      >
        <View
          style={[styles.inner, this.props.contentContainerStyle, {
            paddingLeft: this.innerPaddingLeft,
          }]}
        >
          <View
            style={{
              marginLeft: this.state.x,
            }}
          />
          {
            this.props.cards.map(({ key, card }, index) => {
              const cardStyle = [{
                width: this.props.cardWidth,
                marginRight: this.props.cardGap,
              }];

              let isActiveRnxUiCardView = false;

              if (index === this.activeIndex) {
                cardStyle.push(this.props.activeCardStyle);
                isActiveRnxUiCardView = true;
              }

              return (
                <View
                  key={typeof key === 'undefined' ? index : key}
                  style={[{
                    transform: [{
                      scale: this.scaleArr[index],
                    }],
                  }, cardStyle]}
                >
                  {
                    React.cloneElement(card, {
                      isActiveRnxUiCardView,
                    })
                  }
                </View>
              );
            })
          }
        </View>
      </View>
    );
  }
}

CardView.propTypes = {
  // 样式
  style: View.propTypes.style,
  // 缩放系数
  scaleCoefficient: PropTypes.number,
  // 当前卡片样式
  activeCardStyle: View.propTypes.style,
  // 卡片数组
  cards: PropTypes.arrayOf(PropTypes.shape({
    /* eslint-disable */
    // 数组循环优化标示 key
    key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // 卡片元素
    card: PropTypes.element,
    /* eslint-enable */
  })),
  // 卡片宽度
  cardWidth: PropTypes.number,
  // 卡片间隔
  cardGap: PropTypes.number,
  // 自定义内容容器样式
  contentContainerStyle: View.propTypes.style,
  // 卡片切换时的回调，参数为当前激活的卡片序号
  onChange: PropTypes.func,
  // 卡片经过时的回调，参数为当前经过的卡片序号
  onPass: PropTypes.func,
  // 速度指数
  v: PropTypes.number,
  // 手势滑动触发最小距离（默认需要滑动卡片一半的距离）
  minGestureDistance: PropTypes.number,
  // 最大可访问的卡片序号
  maxIndex: PropTypes.number,
  // 获取元素回调
  getEl: PropTypes.func,
  // 到达顶部回调
  onStartReached: PropTypes.func,
  // 到达底部回调
  onEndReached: PropTypes.func,
  // 开始手势操作回调
  onPanResponderGrant: PropTypes.func,
  // 放开手势操作回调
  onPanResponderRelease: PropTypes.func,
};
CardView.defaultProps = {
  style: null,
  scaleCoefficient: 0.1,
  activeCardStyle: null,
  cards: [],
  cardWidth: 200,
  cardGap: 0,
  contentContainerStyle: null,
  onChange: NOOP,
  onPass: NOOP,
  v: 20,
  minGestureDistance: null,
  maxIndex: null,
  getEl: NOOP,
  onStartReached: NOOP,
  onEndReached: NOOP,
  onPanResponderGrant: NOOP,
  onPanResponderRelease: NOOP,
};

export default CardView;
