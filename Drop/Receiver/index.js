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

    this.onLayout = this.onLayout.bind(this);
  }

  onLayout(e) {
    const {
      x, y, width, height,
    } = e.nativeEvent.layout;

    this.props.getCenterPosition({
      x: x + (width / 2),
      y: y + (height / 2),
    });
  }

  animate() {
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
        style={[{
          transform: [{
            scale: this.state.scale,
          }],
        }, this.props.style]}
        onLayout={this.onLayout}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

Receiver.propTypes = {
  // 获取中心位置回调
  getCenterPosition: PropTypes.func,
  // 获取元素
  getEl: PropTypes.func,
  // 缩放值
  scale: PropTypes.number,
  // 动画时间
  duration: PropTypes.number,
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
Receiver.defaultProps = {
  getCenterPosition: NOOP,
  getEl: NOOP,
  scale: 1.1,
  duration: 300,
  style: null,
  children: null,
};

export default Receiver;
