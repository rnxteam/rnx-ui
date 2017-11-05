/**
 * 按钮
 */
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  COLOR_THEME,
  ACTIVE_OPACITY,
} from '../constant';

const styles = StyleSheet.create({
  container: {
    height: 45,
    overflow: 'hidden',
    backgroundColor: COLOR_THEME,
  },
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});

class Btn extends Component {
  render() {
    let content = this.props.children;
    if (typeof content === 'string') {
      content = (
        <Text style={[styles.text, this.props.textStyle]}>
          {content}
        </Text>
      );
    }

    let onPress = this.props.onPress;
    let activeOpacity = this.props.activeOpacity;
    if (this.props.disabled) {
      onPress = null;
      activeOpacity = 1;
    }

    return (
      <View
        style={[styles.container, this.props.style]}
        hitSlop={this.props.hitSlop}
      >
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={onPress}
          style={[styles.contentContainerStyle, this.props.contentContainerStyle]}
          hitSlop={this.props.hitSlop}
        >
          {content}
        </TouchableOpacity>
      </View>
    );
  }
}

Btn.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 内部容器样式
  contentContainerStyle: View.propTypes.style,
  // 按钮文本样式（children 为字符串时才生效）
  textStyle: Text.propTypes.style,
  // 点击回调
  onPress: PropTypes.func,
  // 按钮内容
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
  // 点击时透明度反馈
  activeOpacity: PropTypes.number,
  // 是否禁用，为 true 时，activeOpacity 为 1，onPress 为 null
  disabled: PropTypes.bool,
  // 按钮热区
  hitSlop: TouchableOpacity.propTypes.hitSlop,
};
Btn.defaultProps = {
  style: null,
  contentContainerStyle: null,
  textStyle: null,
  onPress: null,
  children: '下一步',
  activeOpacity: ACTIVE_OPACITY,
  disabled: false,
  hitSlop: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};

export default Btn;
