import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

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
    borderRadius: 5,
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
        pointerEvents={this.props.pointerEvents}
        useAnimation={this.props.useOverlayAnimation}
        duration={this.props.overlayAnimationDuration}
        onShow={this.props.onShow}
        onHide={this.props.onHide}
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
  // 控制 Overlay 是否可以作为触控事件的目标（参考 https://facebook.github.io/react-native/docs/view.html#pointerevents）
  pointerEvents: Overlay.propTypes.pointerEvents,
  // 是否使用 Overlay 动画
  useOverlayAnimation: PropTypes.bool,
  // Overlay 动画时长
  overlayAnimationDuration: PropTypes.number,
  // 显示回调
  onShow: PropTypes.func,
  // 隐藏回调
  onHide: PropTypes.func,
};
ToolTip.defaultProps = {
  visible: false,
  text: '',
  overlayStyle: null,
  textWrapperStyle: null,
  textStyle: null,
  pointerEvents: 'none',
};

export default ToolTip;
