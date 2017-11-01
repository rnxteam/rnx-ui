import React, {
  Component,
} from 'react';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import styles, {
  DISABLED_COLOR,
} from './styles';

const NOOP = () => {};

class Key extends Component {
  constructor(props) {
    super(props);
    this.style = [styles.key];

    // 样式处理
    if (props.isFirst) {
      this.style.push(styles.firstKeyInLine);
    }
    if (props.type === 'dark') {
      this.style.push(styles.disabledKey);
      this.disabledColor = '#fff';
    } else {
      this.disabledColor = DISABLED_COLOR;
    }

    // 子元素处理
    const children = props.children;
    if (typeof children === 'string') {
      this.children = (
        <Text style={styles.text}>
          {children}
        </Text>
      );
    } else {
      this.children = children;
    }

    // 点击事件处理
    if (props.disabled) {
      this.onPress = null;
    } else {
      this.onPress = this.onPress.bind(this, props.value);
    }
  }

  onPress(text) {
    this.props.onPress(text);
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor={this.disabledColor}
        style={styles.btn}
        onPress={this.onPress}
      >
        <View
          style={this.style}
        >
          {this.children}
        </View>
      </TouchableHighlight>
    );
  }
}

Key.propTypes = {
  // 值
  value: PropTypes.string,
  // 是否禁用
  disabled: PropTypes.bool,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
  // 是否所在行的第一项
  isFirst: PropTypes.bool,
  // 样式类型
  type: PropTypes.oneOf(['light', 'dark']),
  // 点击回调
  onPress: PropTypes.func,
};
Key.defaultProps = {
  value: '',
  disabled: false,
  children: null,
  isFirst: false,
  type: 'light',
  onPress: NOOP,
};

export default Key;
