 /**
  * 短信验证码输入框组件
  */
import React, { Component, PropTypes } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import style from './style';

const NOOP = () => {};

class SmsCaptchaInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: '获取验证码',
      isSending: false,
      sendSmsCount: 0,
      time: props.intervalTime,
    };
    this.onPress = this.onPress.bind(this);
    this.onChangeText = this.onChangeText.bind(this);

    props.collectValidate(this.validate.bind(this));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onChangeText(value) {
    this.value = value;
    this.props.onChangeText(value);
  }

  onPress() {
    // 检测是否处于点击发送短信状态
    if (this.state.isSending) {
      return;
    }
    // 运行点击按钮回调
    if (this.props.onPressSendMsgBtn() === false) {
      return;
    }
    this.setState({
      isSending: true,
      sendSmsCount: (this.state.sendSmsCount + 1),
    });
    this.timer();
    this.interval = setInterval(this.timer.bind(this), 1000);
  }

  timer() {
    if (this.state.time > 0) {
      this.setState({
        buttonText: `${this.state.time}秒后可重发`,
        time: (this.state.time > 1 ? this.state.time - 1 : 0),
      });
    } else {
      this.setState({
        buttonText: '重新获取',
        time: this.props.intervalTime,
        isSending: false,
      });
      clearInterval(this.interval);
    }
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
    if (this.state.sendSmsCount === 0) {
      return {
        ...res,
        err: 1,
        errType: 'NO_SEND',
        msg: `请获取${this.props.readableName}`,
      };
    }
    if (value.length !== this.props.codeLength) {
      return {
        ...res,
        err: 1,
        errType: 'LENGTH_NOT_ENOUGH',
        msg: `${this.props.readableName}需为${this.props.codeLength}位`,
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
      <View style={[style.container, this.props.style]}>
        <TextInput
          clearButtonMode="never"
          keyboardType="numeric"
          onChangeText={this.onChangeText}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor}
          ref={(el) => { this.input = el; }}
          style={[style.input, this.props.inputStyle]}
        />
        <TouchableOpacity
          activeOpacity={this.state.isSending ? 1 : this.props.activeOpacity}
          onPress={this.onPress}
          style={[style.button, this.props.buttonStyle]}
        >
          <Text style={[style.buttonText, this.props.buttonTextStyle]}>
            {this.state.buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

SmsCaptchaInput.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 自定义输入框样式
  inputStyle: TextInput.propTypes.style,
  // 自定义按钮样式
  buttonStyle: View.propTypes.style,
  // 自定义按钮文本样式
  buttonTextStyle: Text.propTypes.style,
  // 提示文字
  placeholder: PropTypes.string,
  // 提示文字颜色
  placeholderTextColor: PropTypes.string,
  // 按钮点击透明度
  activeOpacity: PropTypes.number,
  // 倒计时时间
  intervalTime: PropTypes.number,
  // 点击发送短信按钮回调，当返回 false 时，可以阻止倒计时开始
  onPressSendMsgBtn: PropTypes.func,
  // 验证码校验长度
  codeLength: PropTypes.number,
  // 校验器接口，值通常为叫校验器的校验手机方法
  collectValidate: PropTypes.func,
  // 用来在校验器中做标识
  name: PropTypes.string,
  // 用来在校验器中组成错误信息
  readableName: PropTypes.string,
  // 改变回调
  onChangeText: PropTypes.func,
};
SmsCaptchaInput.defaultProps = {
  style: null,
  inputStyle: null,
  buttonStyle: null,
  buttonTextStyle: null,
  placeholder: '短信验证码',
  placeholderTextColor: '#798698',
  activeOpacity: 0.6,
  intervalTime: 60,
  onPressSendMsgBtn: NOOP,
  codeLength: 6,
  collectValidate: NOOP,
  name: 'SMS_CODE_INPUT',
  readableName: '短信验证码',
  onChangeText: NOOP,
};

export default SmsCaptchaInput;
