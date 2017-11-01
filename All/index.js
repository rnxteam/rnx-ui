/**
 * 页面容器组件
 * @flow
 */
import * as React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

const styles = StyleSheet.create({
  all: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#f3f6fc',
  },
});

function All(props: {
  // 子元素
  children?: React.Node,
  // 自定义样式
  style?: StyleObj,
  // StatusBar 背景色
  statusBarBgColor?: string,
  // StatusBar 样式类型
  statusBarStyle?: string,
}) {
  return (
    <View style={[styles.all, props.style]}>
      <StatusBar
        backgroundColor={props.statusBarBgColor}
        barStyle={props.statusBarStyle}
      />
      {props.children}
    </View>
  );
}

All.defaultProps = {
  children: null,
  style: null,
  statusBarBgColor: 'transparent',
  statusBarStyle: 'light-content',
};

export default All;
