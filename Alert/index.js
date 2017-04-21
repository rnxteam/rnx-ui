/**
 * @component Alert
 * @version 0.17.0
 * @description 警告弹框组件
 *
 *
 * @instructions {instruInfo: ./Alert/Alert.md}
 */
import React, {
  PropTypes,
} from 'react';
import {
  Text,
} from 'react-native';

import Dialog from '../Dialog';

const NOOP = () => {};

class Alert extends Dialog {
  render() {
    return (
      <Dialog
        {...this.props}
        buttons={[{
          text: this.props.buttonText,
          style: this.props.buttonTextStyle,
          onPress: this.props.onPress,
        }]}
      />
    );
  }
}

Alert.propTypes = {
  ...Dialog.propTypes,
  /**
     * @property buttonText
     * @type String
     * @default '好'
     * @description 按钮文本
     */
  buttonText: PropTypes.string,
  /**
     * @property buttonTextStyle
     * @type Object
     * @default null
     * @description 按钮文本样式
     */
  buttonTextStyle: Text.propTypes.style,
   /**
     * @property onPress
     * @type Function
     * @default NOOP
     * @description 按钮点击回调
     */
  onPress: PropTypes.func,
};
Alert.defaultProps = {
  ...Dialog.defaultProps,
  buttonText: '好',
  buttonTextStyle: null,
  onPress: NOOP,
};

export default Alert;
