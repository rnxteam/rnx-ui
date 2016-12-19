/**
 * 按钮
 */
import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 40,
    overflow: 'hidden',
    backgroundColor: '#fd734c',
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
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={onPress}
          style={[styles.contentContainerStyle, this.props.contentContainerStyle]}
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
};
Btn.defaultProps = {
  style: null,
  contentContainerStyle: null,
  textStyle: null,
  onPress: null,
  children: '下一步',
  activeOpacity: 0.6,
  disabled: false,
};

export default Btn;
