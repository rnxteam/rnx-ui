/**
 * @component VirtualPasswordInput
 * @version 0.17.0
 * @description 虚拟密码输入框
 *
 * @instructions {instruInfo: ./VirtualPasswordInput/VirtualPasswordInput.md}
 */

import React, { Component, PropTypes } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import styles from './styles.js';

const NOOP = () => {};

class VirtualPasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  getCells() {
    const cells = [];

    for (let i = 0; i < this.props.maxLength; i += 1) {
      const cellValue = this.props.value[i];
      let child = null;

      if (cellValue) {
        if (this.props.secureTextEntry) {
          child = <View style={[styles.secure, this.props.secureStyle]} />;
        } else {
          child = <Text style={this.props.textStyle}>{cellValue}</Text>;
        }
      }

      cells.push((
        <View key={i} style={[styles.cell, this.props.cellStyle]}>
          {child}
        </View>
      ));
    }

    return cells;
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={[styles.all, this.props.style]} >
          <View style={[styles.container, this.props.containerStyle]}>
            { this.getCells() }
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

}

VirtualPasswordInput.propTypes = {
  /**
   * @property value
   * @type String
   * @default ''
   * @description 值
   */
  value: PropTypes.string,
  /**
   * @property secureTextEntry
   * @type Boolean
   * @default true
   * @description 是否启用安全输入
   */
  secureTextEntry: PropTypes.bool,
  /**
   * @property style
   * @type Object
   * @default null
   * @description 最外层样式
   */
  style: View.propTypes.style,
  /**
   * @property containerStyle
   * @type Object
   * @default null
   * @description 容器样式
   */
  containerStyle: View.propTypes.style,
  /**
   * @property cellStyle
   * @type Object
   * @default null
   * @description 单个输入框样式
   */
  cellStyle: View.propTypes.style,
  /**
   * @property secureStyle
   * @type Object
   * @default null
   * @description 安全码样式
   */
  secureStyle: View.propTypes.style,
  /**
   * @property textStyle
   * @type Object
   * @default null
   * @description 文本样式
   */
  textStyle: Text.propTypes.style,
  /**
   * @property maxLength
   * @type Number
   * @default 6
   * @description 最大长度
   */
  maxLength: PropTypes.number,
  /**
   * @property onPress
   * @type Function
   * @default NOOP
   * @description 点击回调
   */
  onPress: PropTypes.func,
};
VirtualPasswordInput.defaultProps = {
  value: '',
  secureTextEntry: true,
  style: null,
  containerStyle: null,
  cellStyel: null,
  secureStyle: null,
  textStyle: null,
  maxLength: 6,
  onPress: NOOP,
};

export default VirtualPasswordInput;
