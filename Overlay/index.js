/**
 * 遮罩层
 * 内部封装的 Modal 组件，该组件会阻止安卓的物理返回键
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const NOOP = () => {};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
  },
});

class Overlay extends Component {
  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <Modal
        animationType="fade"
        transparent
      >
        <TouchableWithoutFeedback
          onPress={this.props.onPress}
        >
          <View
            style={[styles.modal, this.props.style]}
          >
            {this.props.children}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

Overlay.propTypes = {
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 点击回调
  onPress: PropTypes.func,
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
Overlay.defaultProps = {
  visible: false,
  onPress: NOOP,
  style: null,
  children: null,
};

export default Overlay;
