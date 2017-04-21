/**
 * @component Receiver
 * @version 0.17.0
 * @description 掉落元素接受组件
 *
 *  用来包裹掉落元素接受元素，如果该元素是绝对定位，定位的样式应该写在 `Receiver` 或父元素上，而不应该写在子元素上。`Receiver` 主要提供以下功能：
 *  1. 提供元素中心坐标，以作为掉落动画的终点；
 *  2. 提供掉落组件到达时的响应动画，需要在 `Dropper` 元素的 `onEnd` 回调中手动调用 `Receiver` 元素的 `animate` 方法。
 *
 * @instructions {instruInfo: ./Drop/Receiver/Receiver.md}
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  View,
  Animated,
} from 'react-native';

const NOOP = () => {};

class Receiver extends Component {
  constructor(props) {
    super(props);
    props.getEl(this);

    this.state = {
      scale: new Animated.Value(1),
    };

    this.getEl = this.getEl.bind(this);
  }

  componentWillUnmount() {
    this.willUnmount = true;
  }

  getEl(el) {
    this.el = el;
    // sometimes the component does not finish rendering before ref
    setTimeout(() => {
      this.getCenterPosition();
    }, 0);
  }

  getCenterPosition() {
    if (this.el) {
      /* eslint-disable */
      // in RN@0.33, use this.el._component
      // in RN@0.30, use this.el.refs.node
      const node = this.el._component || this.el.refs.node;
      /* eslint-enable */
      if (node) {
        node.measure((fx, fy, width, height, px, py) => {
          this.props.getCenterPosition({
            x: px + (width / 2),
            y: py + (height / 2),
          });
        });
      }
    }
  }

  animate() {
    if (this.willUnmount) {
      return;
    }
    this.setState({
      scale: new Animated.Value(1),
    });
    Animated.timing(this.state.scale, {
      toValue: this.props.scale,
      duration: this.props.duration,
      easing: t => Math.sin(t * Math.PI),
    }).start();
  }

  render() {
    return (
      <Animated.View
        ref={this.getEl}
        onLayout={this.props.onLayout}
        style={[{
          transform: [{
            scale: this.state.scale,
          }],
        }, this.props.style]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

Receiver.propTypes = {
  /**
   * @property getCenterPosition
   * @type Function
   * @default NOOP
   * @description 获取中心位置回调
   */
  getCenterPosition: PropTypes.func,
  /**
   * @property getEl
   * @type Function
   * @default NOOP
   * @description 获取元素回调
   */
  getEl: PropTypes.func,
  /**
   * @property scale
   * @type Number
   * @default 1.1
   * @description 缩放值
   */
  scale: PropTypes.number,
  /**
   * @property duration
   * @type Number
   * @default 1.1
   * @description 动画时间
   */
  duration: PropTypes.number,
  /**
   * @property style
   * @type Object
   * @default null
   * @description 自定义样式
   */
  style: View.propTypes.style,
  /**
   * @property children
   * @type Element Array
   * @default null
   * @description 子元素
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  /**
   * @property onLayout
   * @type Function
   * @default NOOP
   * @description 布局回调
   */
  onLayout: PropTypes.func,
};
Receiver.defaultProps = {
  getCenterPosition: NOOP,
  getEl: NOOP,
  scale: 1.1,
  duration: 300,
  style: null,
  children: null,
  onLayout: NOOP,
};

export default Receiver;
