/**
 * 页面容器组件
 */
import React, { PropTypes } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {
  COLOR_BG_DARK,
} from '../constant';

const styles = StyleSheet.create({
  all: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#f3f6fc',
  },
});

function All(props) {
  return (
    <View style={[styles.all, props.style]}>
      <StatusBar backgroundColor={props.statusBarBgColor} barStyle={props.statusBarStyle} />
      {props.children}
    </View>
  );
}

All.propTypes = {
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 自定义样式
  style: View.propTypes.style,
  // StatusBar 背景色
  statusBarBgColor: PropTypes.string,
  // StatusBar 样式类型
  statusBarStyle: PropTypes.string,
};
All.defaultProps = {
  children: null,
  style: null,
  barColor: COLOR_BG_DARK,
  barStyle: 'light-content',
};

export default All;
