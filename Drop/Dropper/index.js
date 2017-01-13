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

    const {
      startPosition,
      endPosition,
    } = props;

    this.startPosition = {
      x: startPosition.x - (props.width / 2),
      y: startPosition.y - (props.height / 2),
    };

    this.x = new Animated.Value(0);
    this.y = new Animated.Value(0);
    this.scale = new Animated.Value(1);
    this.rotate = new Animated.Value(0);
    this.opacity = new Animated.Value(1);

    const dx = endPosition.x - startPosition.x;
    const dy = endPosition.y - startPosition.y;
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
  // 起点位置
  startPosition: PropTypes.shape({
    // 水平坐标
    x: PropTypes.number,
    // 垂直坐标
    y: PropTypes.number,
  }).isRequired,
  // 终点位置
  endPosition: PropTypes.shape({
    // 水平坐标
    x: PropTypes.number,
    // 垂直坐标
    y: PropTypes.number,
  }).isRequired,
  // 掉落元素宽度
  width: PropTypes.number,
  // 掉落元素高度
  height: PropTypes.number,
  // 动画时间
  duration: PropTypes.number,
  // 弹跳的高度
  jumpHeight: PropTypes.number,
  // 缩放值
  scale: PropTypes.number,
  // 选择角度，如 360
  rotate: PropTypes.number,
  // 动画结束回调
  onEnd: PropTypes.func,
  // 是否需要收尾动画
  endAnimation: PropTypes.bool,
  // 收尾弹跳的高度
  endJumpHeight: PropTypes.number,
  // 收尾动画时间
  endAnimationDuration: PropTypes.number,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 自定义样式
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
  onEnd: NOOP,
  endAnimation: true,
  endJumpHeight: 40,
  endAnimationDuration: 400,
  children: null,
  style: null,
};

export default Dropper;
