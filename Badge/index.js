/**
 * 角标组件
 * 注意：
 * 1. Badge 没有宽度，跨度随外部容器变化
 */
import React, {
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const NUMBER_HEIGHT = 14;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  number: {
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

function Badge(props) {
  const text = props.text;
  const numberWidth = 7 * (text.length + 1);

  return (
    <View style={[styles.container, props.style]}>
      {
        props.children
      }
      {
        text.length > 0 ? (
          <View
            style={[styles.number, {
              width: numberWidth,
            }, props.numberStyle]}
          >
            <Text style={styles.text}>
              {text}
            </Text>
          </View>
        ) : null
      }
    </View>
  );
}

Badge.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 自定义数字样式
  numberStyle: View.propTypes.style,
  // 角标文本内容
  text: PropTypes.string,
  // 主体元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
Badge.defaultProps = {
  style: null,
  numberStyle: null,
  text: '',
  children: null,
};

export default Badge;
