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
  // 获取中心位置回调
  getCenterPosition: PropTypes.func,
  // 获取元素回调
  getEl: PropTypes.func,
  // 缩放值
  scale: PropTypes.number,
  // 动画时间
  duration: PropTypes.number,
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 布局回调
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
