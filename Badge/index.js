/**
 * 角标组件
 * 注意：
 * 1. Badge 没有宽度，跨度随外部容器变化
 */
import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const TEXT_HEIGHT = 14;
const DOT_HEIGHT = 8;

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
    height: TEXT_HEIGHT,
    minWidth: TEXT_HEIGHT,
    overflow: 'hidden',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 4,
  },
  text: {
    fontSize: 10,
    color: '#fff',
    marginTop: -1,
  },
  dot: {
    height: DOT_HEIGHT,
    width: DOT_HEIGHT,
    top: -4,
    right: -4,
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: DOT_HEIGHT / 2,
  },
});

class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      top: -5,
      right: -5,
      borderRadius: 7,
    };
  }

  // 获取徽标的布局信息
  setPosition = (params) => {
    const { nativeEvent } = params;
    const { layout } = nativeEvent;
    const { width, height } = layout;
    this.setState({
      top: -(height * 0.5),
      right: -(width * 0.5),
      borderRadius: height * 0.5,
      opacity: 1,
    });
  }

  // 小红点生成器
  createDot() {
    if (this.props.dot) {
      return (
        <View
          style={[styles.dot, this.props.dotStyle]}
        />
      );
    }
    return null;
  }

  render() {
    let text = this.props.text;

    if (typeof text !== 'string') {
      text = `${text}`;
    }

    return (
      <View style={[styles.container, this.props.style]}>
        {
          this.props.children
        }
        {
        text.length > 0 ? (
          <View
            style={[styles.textContainer, {
              right: this.state.right,
              top: this.state.top,
              borderRadius: this.state.borderRadius,
              opacity: this.state.opacity,
            }, this.props.textContainerStyle]}
            onLayout={this.setPosition}
          >
            <Text
              style={[styles.text, this.props.textStyle]}
              numberOfLines={1}
            >
              {text}
            </Text>
          </View>
        ) : this.createDot()
      }
      </View>
    );
  }
}

Badge.propTypes = {
  // 样式
  style: View.propTypes.style,
  // 文本容器样式
  textContainerStyle: View.propTypes.style,
  // 文本样式
  textStyle: Text.propTypes.style,
  // 角标文本内容
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // 主体元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 是否使用小红点
  dot: PropTypes.bool,
  // 小红点样式
  dotStyle: View.propTypes.style,
};
Badge.defaultProps = {
  style: null,
  textContainerStyle: null,
  textStyle: null,
  text: '',
  children: null,
  dot: null,
  dotStyle: null,
};

export default Badge;
