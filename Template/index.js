/**
 * 组件开发模板
 * 注意：
 * 这个不是供业务使用的组件，而是为 rnx-ui 开发提供的组件模板
 */
import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  all: {

  },
});

// rnx-ui 组件一律不允许使用 stateless function 构建
class Template extends Component {
  render() {
    return (
      <View style={[styles.all, this.props.style]}>
        {
          this.props.children
        }
      </View>
    );
  }
}

Template.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
Template.defaultProps = {
  style: null,
  children: null,
};

export default Template;
