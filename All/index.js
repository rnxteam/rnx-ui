/**
 * 页面容器组件
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  all: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#f3f6fc',
  },
});

class All extends Component {
  render() {
    return (
      <View style={[styles.all, this.props.style]}>
        <StatusBar
          backgroundColor={this.props.statusBarBgColor}
          barStyle={this.props.statusBarStyle}
        />
        {this.props.children}
      </View>
    );
  }
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
  statusBarBgColor: 'transparent',
  statusBarStyle: 'light-content',
};

export default All;
