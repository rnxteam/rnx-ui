import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Overlay from '../Overlay';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  text: {
    color: '#fff',
  },
});


class ToolTip extends Component {
  render() {
    const {
      visible,
      overlayStyle,
      textStyle,
      text,
      textWrapperStyle,
    } = this.props;

    return (
      <Overlay
        visible={visible}
        style={[styles.overlay, overlayStyle]}
      >
        <View style={[styles.textWrapper, textWrapperStyle]}>
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
      </Overlay>
    );
  }
}

ToolTip.propTypes = {
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 显示文本
  text: PropTypes.string.isRequired,
  // 遮罩层样式
  overlayStyle: View.propTypes.style,
  // 文本容器样式
  textWrapperStyle: View.propTypes.style,
  // 文本样式
  textStyle: Text.propTypes.style,
};
ToolTip.defaultProps = {
  visible: false,
  text: '',
  overlayStyle: null,
  textWrapperStyle: null,
  textStyle: null,
};

export default ToolTip;
