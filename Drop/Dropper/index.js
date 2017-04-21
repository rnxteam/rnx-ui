/**
 * @component Dropper
 * @version 0.17.0
 * @description 掉落组件
 * 用来包裹掉落元素，提供抛物线运动的动画。
 *
 * @instructions {instruInfo: ./Drop/Dropper/Dropper.md}
 */
import React, {
  Component,
  PropTypes,
} from 'react';
import {
  View,
  Animated,
  StyleSheet,
} from 'react-native';

const NOOP = () => {};

const styles = StyleSheet.create({
  all: {
    position: 'absolute',
  },
});

class Dropper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };

    this.startPosition = {
      x: props.startPosition.x - (props.width / 2),
      y: props.startPosition.y - (props.height / 2),
    };

    this.x = new Animated.Value(0);
    this.y = new Animated.Value(0);
    this.scale = new Animated.Value(1);
    this.rotate = new Animated.Value(0);
    this.opacity = new Animated.Value(0);

    const dx = props.endPosition.x - props.startPosition.x;
    const dy = props.endPosition.y - props.startPosition.y;
    this.dx = dx;
    this.dy = dy;

    if (dy > 0) {
      const k = props.jumpHeight / dy;
      this.b = -Math.sqrt((4 * k * k) + (4 * k)) - (2 * k);
      this.a = 1 - this.b;
    } else {
      const k = (props.jumpHeight / dy) - 1;
      this.b = Math.sqrt((4 * k * k) + (4 * k)) - (2 * k);
      this.a = 1 - this.b;
    }
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.opacity, {
        toValue: 1,
        duration: this.props.showDuration,
        easing: t => t,
      }),
      Animated.timing(this.x, {
        toValue: this.dx,
        duration: this.props.duration,
        easing: t => t,
      }),
      Animated.timing(this.y, {
        toValue: this.dy,
        duration: this.props.duration,
        easing: (t) => {
          const s = (this.a * t * t) + (this.b * t);
          return s;
        },
      }),
      Animated.timing(this.scale, {
        toValue: this.props.scale,
        duration: this.props.duration,
        easing: t => t,
      }),
      Animated.timing(this.rotate, {
        toValue: 1,
        duration: this.props.duration,
        easing: t => t,
      }),
    ]).start(() => {
      this.props.onEnd();

      if (this.props.endAnimation) {
        Animated.parallel([
          Animated.timing(this.y, {
            toValue: this.dy - this.props.endJumpHeight,
            duration: this.props.endAnimationDuration,
            easing: t => Math.sin(t * Math.PI),
          }),
          Animated.timing(this.rotate, {
            toValue: 2,
            duration: this.props.endAnimationDuration,
            easing: t => t,
          }),
          Animated.timing(this.opacity, {
            toValue: 0,
            duration: this.props.endAnimationDuration,
            easing: t => t,
          }),
        ]).start(() => {
          this.setState({
            visible: false,
          });
        });
      } else {
        this.setState({
          visible: false,
        });
      }
    });
  }

  render() {
    if (!this.state.visible) {
      return null;
    }
    return (
      <Animated.View
        style={[styles.all, {
          left: this.startPosition.x,
          top: this.startPosition.y,
          transform: [{
            translateX: this.x,
          }, {
            translateY: this.y,
          }, {
            scale: this.scale,
          }, {
            rotate: this.rotate.interpolate({
              inputRange: [0, 1, 2],
              outputRange: ['0deg', `${this.props.rotate}deg`, `${this.props.rotate * 2}deg`],
            }),
          }],
          opacity: this.opacity,
        }, this.props.style]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

Dropper.propTypes = {
  /**
   * @property startPosition
   * @param {Number} x 水平坐标
   * @param {Number} y 垂直坐标
   * @type Object
   * @default {0,0}
   * @description 起点位置
   */
  startPosition: PropTypes.shape({
    // 水平坐标
    x: PropTypes.number,
    // 垂直坐标
    y: PropTypes.number,
  }).isRequired,
  /**
   * @property endPosition
   * @param {Number} x 水平坐标
   * @param {Number} y 垂直坐标
   * @type Object
   * @default {0,0}
   * @description 终点位置
   */
  endPosition: PropTypes.shape({
    // 水平坐标
    x: PropTypes.number,
    // 垂直坐标
    y: PropTypes.number,
  }).isRequired,
  /**
   * @property width
   * @type Number
   * @default 0
   * @description 掉落元素宽度
   */
  width: PropTypes.number,
   /**
   * @property height
   * @type Number
   * @default 0
   * @description 掉落元素高度
   */
  height: PropTypes.number,
  /**
   * @property duration
   * @type Number
   * @default 1000
   * @description 动画时间
   */
  duration: PropTypes.number,
  /**
   * @property jumpHeight
   * @type Number
   * @default 60
   * @description 弹跳的高度
   */
  jumpHeight: PropTypes.number,
  /**
   * @property scale
   * @type Number
   * @default 1
   * @description 缩放值
   */
  scale: PropTypes.number,
  /**
   * @property rotate
   * @type Number
   * @default 360
   * @description 旋转角度
   */
  rotate: PropTypes.number,
  /**
   * @property showDuration
   * @type Number
   * @default 100
   * @description 动画刚开始由透明变化至不透明的时间
   */
  showDuration: PropTypes.number,
  /**
   * @property onEnd
   * @type Function
   * @default NOOP
   * @description 动画结束回调
   */
  onEnd: PropTypes.func,
   /**
   * @property endAnimation
   * @type Boolean
   * @default true
   * @description 是否需要收尾动画
   */
  endAnimation: PropTypes.bool,
  /**
   * @property endJumpHeight
   * @type Number
   * @default 40
   * @description 收尾弹跳的高度
   */
  endJumpHeight: PropTypes.number,
  /**
   * @property endAnimationDuration
   * @type Number
   * @default 400
   * @description 收尾动画时间
   */
  endAnimationDuration: PropTypes.number,
  /**
   * @property children
   * @type Element
   * @default null
   * @description 子元素
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
   /**
   * @property style
   * @type Object
   * @default null
   * @description 自定义样式
   */
  style: View.propTypes.style,
};
Dropper.defaultProps = {
  startPosition: {
    x: 0,
    y: 0,
  },
  endPosition: {
    x: 0,
    y: 0,
  },
  width: 0,
  height: 0,
  duration: 1000,
  jumpHeight: 60,
  scale: 1,
  rotate: 360,
  showDuration: 100,
  onEnd: NOOP,
  endAnimation: true,
  endJumpHeight: 40,
  endAnimationDuration: 400,
  children: null,
  style: null,
};

export default Dropper;
