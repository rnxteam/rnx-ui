/**
 * 组件开发模板
 * 注意：
 * 这个不是供业务使用的组件，而是为 rnx-ui 开发提供的组件模板
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  all: {

  },
});

class Template extends Component {
  constructor(props) {
    super(props);
  }

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
