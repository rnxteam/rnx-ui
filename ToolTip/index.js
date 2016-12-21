import React, {
  Component,
  PropTypes,
} from 'react';
import {
  View,
  Text,
  Modal,
} from 'react-native';

import styles from './styles.js';

class ToolTip extends Component {
  render() {
    const {
      visible,
      modalStyle,
      textStyle,
      text,
      textWrapperStyle,
    } = this.props;

    if (!visible) {
      return null;
    }

    return (
      <Modal
        animationType="fade"
        transparent
      >
        <View style={[styles.modal, modalStyle]}>
          <View style={[styles.textWrapper, textWrapperStyle]}>
            <Text style={[styles.text, textStyle]}>{text}</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

ToolTip.propTypes = {
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 显示文本
  text: PropTypes.string.isRequired,
  // 遮罩层样式
  modalStyle: View.propTypes.style,
  // 文本容器样式
  textWrapperStyle: View.propTypes.style,
  // 文本样式
  textStyle: Text.propTypes.style,
};
ToolTip.defaultProps = {
  visible: false,
  text: '',
  modalStyle: null,
  textWrapperStyle: null,
  textStyle: null,
};

export default ToolTip;
