import React, {
  Component,
} from 'react';
import {
  View,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

const NOOP = () => {};

class Emitter extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.getEl = this.getEl.bind(this);
  }

  onPress() {
    this.el.measure((fx, fy, width, height, px, py) => {
      this.props.onPress({
        x: px + (width / 2),
        y: py + (height / 2),
      });
    });
  }

  getEl(el) {
    this.el = el;
  }

  render() {
    return (
      <TouchableHighlight
        ref={this.getEl}
        style={this.props.style}
        onPress={this.onPress}
        hitSlop={{
          top: 10,
          left: 10,
          right: 10,
          bottom: 10,
        }}
      >
        <View>
          {this.props.children}
        </View>
      </TouchableHighlight>
    );
  }
}

Emitter.propTypes = {
  // 点击回调，参数为点击元素中心坐标，如：{x: 0, y: 0}
  onPress: PropTypes.func,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 自定义样式
  style: View.propTypes.style,
};
Emitter.defaultProps = {
  onPress: NOOP,
  children: null,
  style: null,
};

export default Emitter;
