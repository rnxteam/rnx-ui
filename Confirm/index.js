/**
 * @component Confirm
 * @version 0.17.0
 * @description 确认弹框组件
 *
 * @instructions {instruInfo: ./Confirm/Confirm.md}
 */
import React, {
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import Dialog from '../Dialog';

const NOOP = () => {};

const styles = StyleSheet.create({
  confirm: {
    fontWeight: 'bold',
  },
});

class Confirm extends Dialog {
  render() {
    return (
      <Dialog
        {...this.props}
        buttons={[{
          text: this.props.cancelText,
          onPress: this.props.onCancel,
          style: this.props.cancelTextStyle,
        }, {
          text: this.props.confirmText,
          onPress: this.props.onConfirm,
          style: [styles.confirm, this.props.confirmTextStyle],
        }]}
      />
    );
  }
}

Confirm.propTypes = {
  ...Dialog.propTypes,
  /**
   * @property cancelText
   * @type String
   * @default '取消'
   * @description 取消按钮文本
   */
  cancelText: PropTypes.string,
  /**
   * @property cancelTextStyle
   * @type Object
   * @default null
   * @description 取消按钮文本样式
   */
  cancelTextStyle: Text.propTypes.style,
   /**
     * @property onCancel
     * @type Function
     * @default NOOP
     * @description 取消按钮点击回调
     */
  onCancel: PropTypes.func,
  /**
   * @property confirmText
   * @type String
   * @default '确认'
   * @description 确认按钮文本
   */
  confirmText: PropTypes.string,
  /**
   * @property confirmTextStyle
   * @type Object
   * @default null
   * @description 确认按钮文本样式
   */
  confirmTextStyle: Text.propTypes.style,
  /**
   * @property onConfirm
   * @type Function
   * @default NOOP
   * @description 确认按钮点击回调
   */
  onConfirm: PropTypes.func,
};
Confirm.defaultProps = {
  ...Dialog.defaultProps,
  cancelText: '取消',
  cancelTextStyle: null,
  onCancel: NOOP,
  confirmText: '确认',
  confirmTextStyle: null,
  onConfirm: NOOP,
};

export default Confirm;
