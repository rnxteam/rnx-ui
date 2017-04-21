/**
 * @component PhoneNumInput
 * @version 0.13.1
 * @description 手机号码输入框组件
 *
 * @instructions {instruInfo: ./PhoneNumInput/PhoneNumInput.md}
 */
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import {
  COLOR_PLACEHOLDER,
} from '../constant';

const NOOP = () => {};

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flexDirection: 'row',
    height: 50,
    marginBottom: 1,
  },
  input: {
    flex: 1,
  },
});

class PhoneNumInput extends Component {
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
    props.collectValidate(this.validate.bind(this));
  }

  onChangeText(value) {
    this.value = value;
    this.props.onChangeText(value, this.props.name);
  }

  validate() {
    const value = this.value;
    const res = {
      name: this.props.name,
      value,
    };

    if (value === '' || value === undefined) {
      return {
        ...res,
        err: 1,
        errType: 'NO_EMPTY',
        msg: `${this.props.readableName}不能为空`,
      };
    }

    // if (!(/^1(3|4|5|7|8)\d{9}$/.test(value))) {
    if (value.length !== 11) {
      return {
        ...res,
        err: 1,
        errType: 'INVALID',
        msg: `${this.props.readableName}有误`,
      };
    }

    return {
      ...res,
      err: 0,
      errType: '',
      msg: '成功',
    };
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          clearButtonMode="never"
          defaultValue={this.props.defaultValue}
          keyboardType="phone-pad"
          onChangeText={this.onChangeText}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor}
          style={[styles.input, this.props.inputStyle]}
          maxLength={11}
        />
      </View>
    );
  }
}

PhoneNumInput.propTypes = {
  /**
   * @property style
   * @type Object
   * @default null
   * @description  自定义样式
   */
  style: View.propTypes.style,
   /**
   * @property inputStyle
   * @type Object
   * @default null
   * @description  自定义输入框样式
   */
  inputStyle: TextInput.propTypes.style,
  /**
   * @property placeholder
   * @type String
   * @default '手机号'
   * @description 提示文字
   */
  placeholder: PropTypes.string,
  /**
   * @property placeholderTextColor
   * @type String
   * @default COLOR_PLACEHOLDER
   * @description 提示文字颜色
   */
  placeholderTextColor: PropTypes.string,
  /**
   * @property collectValidate
   * @type Function
   * @default NOOP
   * @description 校验器接口
   */
  collectValidate: PropTypes.func,
  /**
   * @property defaultValue
   * @type String
   * @default ''
   * @description 默认值
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  /**
   * @property name
   * @type String
   * @default 'PHONE_NUM_INPUT'
   * @description 用来在校验器中做标识
   */
  name: PropTypes.string,
  /**
   * @property readableName
   * @type String
   * @default '手机号'
   * @description 用来在校验器中组成错误信息
   */
  readableName: PropTypes.string,
  /**
   * @property onChangeText
   * @type Function
   * @default NOOP
   * @description 改变回调
   */
  onChangeText: PropTypes.func,
};
PhoneNumInput.defaultProps = {
  style: null,
  inputStyle: null,
  placeholder: '手机号',
  placeholderTextColor: COLOR_PLACEHOLDER,
  collectValidate: NOOP,
  defaultValue: '',
  name: 'PHONE_NUM_INPUT',
  readableName: '手机号',
  onChangeText: NOOP,
};

export default PhoneNumInput;
