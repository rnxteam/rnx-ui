/**
 * 角标组件
 * 注意：
 * 1. Badge 没有宽度，跨度随外部容器变化
 */
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const NUMBER_HEIGHT = 14;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 7,
    height: NUMBER_HEIGHT,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    color: '#fff',
    marginTop: -1,
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
});

class Badge extends Component {
  render() {
    let text = this.props.text;

    if (typeof text !== 'string') {
      text = `${text}`;
    }
    const textWidth = this.props.characterWidth * (text.length + 1);

    return (
      <View style={[styles.container, this.props.style]}>
        {
          this.props.children
        }
        {
        text.length > 0 ? (
          <View
            style={[styles.textContainer, {
              width: textWidth,
            }, this.props.textContainerStyle]}
          >
            <Text style={[styles.text, this.props.textStyle]}>
              {text}
            </Text>
          </View>
        ) : null
      }
      </View>
    );
  }
}

Badge.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 自定义文本容器样式
  textContainerStyle: View.propTypes.style,
  // 自定义文本样式
  textStyle: Text.propTypes.style,
  // 单个字符宽度
  characterWidth: PropTypes.number,
  // 角标文本内容
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // 主体元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
Badge.defaultProps = {
  style: null,
  textContainerStyle: null,
  textStyle: null,
  characterWidth: 7,
  text: '',
  children: null,
};

export default Badge;
