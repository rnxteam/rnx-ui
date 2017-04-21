/**
 * @component ToolTip
 * @version 0.16.0
 * @description 提示框
 *
 * @instructions {instruInfo: ./ToolTip/ToolTip.md}
 */
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
      >
        <View style={[styles.textWrapper, textWrapperStyle]}>
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
      </Overlay>
    );
  }
}

ToolTip.propTypes = {
 /**
  * @property visible
  * @type Boolean
  * @default false
  * @description 显示开关
  */
  visible: PropTypes.bool.isRequired,
 /**
  * @property text
  * @type String
  * @default ''
  * @description 显示文本
  */
  text: PropTypes.string.isRequired,
 /**
  * @property overlayStyle
  * @type Object
  * @default null
  * @description 遮罩层样式
  */
  overlayStyle: View.propTypes.style,
 /**
  * @property textWrapperStyle
  * @type Object
  * @default null
  * @description 文本容器样式
  */
  textWrapperStyle: View.propTypes.style,
 /**
  * @property textStyle
  * @type Object
  * @default null
  * @description 文本样式
  */
  textStyle: Text.propTypes.style,
 /**
  * @property pointerEvents
  * @type String
  * @default 'none'
  * @description 控制 Overlay 是否可以作为触控事件的目标（参考 https://facebook.github.io/react-native/docs/view.html#pointerevents）
  */
  pointerEvents: Overlay.propTypes.pointerEvents,
  /**
  * @property useOverlayAnimation
  * @type Boolean
  * @default true
  * @description 是否使用 Overlay 动画
  */
  useOverlayAnimation: PropTypes.bool,
};
ToolTip.defaultProps = {
  visible: false,
  text: '',
  overlayStyle: null,
  textWrapperStyle: null,
  textStyle: null,
  pointerEvents: 'none',
  useOverlayAnimation: true,
};

export default ToolTip;
