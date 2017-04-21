# SmsCaptchaInput

**短信验证码输入框**

提供发送短信按钮和倒计时功能。

短信验证码输入框组件有4种状态：

1. 初始状态
2. 发送短信中状态
3. 倒计时状态
4. 倒计时结束状态

点击按钮会使组件由 `1. 初始状态` 进入 `2. 发送短信中状态`，此时需要根据接口状况进行判断：

1. 如果发送短信成功：手动调起组件的 `start()` 方法，进入 `3. 倒计时状态`，在倒计时结束时组件会自动进入 `4. 倒计时结束状态`；

2. 如果发送短信失败：手动调起组件的 `stop()` 方法，进入 `4. 倒计时结束状态`。

> rnx-ui 表单校验工具 [Validator](https://github.com/dragonwong/rnx-ui/tree/master/util/Validator) 现已支持该组件。

## Demo

<image src="http://wx3.sinaimg.cn/mw1024/4c8b519dly1feumcw9v67g20nc12c7wh.gif" width="320" />

## Props

```js
SmsCaptchaInput.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 自定义输入框样式
  inputStyle: TextInput.propTypes.style,
  // 自定义按钮样式
  btnStyle: View.propTypes.style,
  // 按钮文字：初始状态
  btnTextInital: PropTypes.string,
  // 按钮文字：发送短信中
  btnTextSending: PropTypes.string,
  // 按钮文字：倒计时中，`{time}` 将会被替换为倒计时数字
  btnTextTiming: PropTypes.string,
  // 按钮文字：倒计时结束
  btnTextTimed: PropTypes.string,
  // 自定义按钮文本样式
  btnTextStyle: Text.propTypes.style,
  // 提示文字
  placeholder: PropTypes.string,
  // 提示文字颜色
  placeholderTextColor: PropTypes.string,
  // 按钮点击透明度
  activeOpacity: PropTypes.number,
  // 倒计时时间
  intervalTime: PropTypes.number,
  // 点击发送短信按钮回调，当返回 false 时，可以阻止倒计时开始；
  // 该回调接受两个参数：开始倒计时方法：`start` 和结束倒计时方法 `stop`
  onPressBtn: PropTypes.func,
  // 倒计时结束回调
  onStop: PropTypes.func,
  // 验证码校验长度
  captchaLength: PropTypes.number,
  // 校验器接口，值通常为叫校验器的校验手机方法
  collectValidate: PropTypes.func,
  // 用来在校验器中做标识
  name: PropTypes.string,
  // 用来在校验器中组成错误信息
  readableName: PropTypes.string,
  // 改变回调
  onChangeText: PropTypes.func,
  // 是否开启自动获取焦点（在 start 被调用时）
  autoFocus: PropTypes.bool,
  // 获取输入框
  getInput: PropTypes.func,
  // 发送短信按钮热区
  hitSlop: TouchableOpacity.propTypes.hitSlop,
};
SmsCaptchaInput.defaultProps = {
  style: null,
  inputStyle: null,
  btnStyle: null,
  btnTextInital: '获取验证码',
  btnTextSending: '正在发送短信',
  btnTextTiming: '{time}秒后可重发',
  btnTextTimed: '重新获取',
  btnTextStyle: null,
  placeholder: '短信验证码',
  placeholderTextColor: COLOR_PLACEHOLDER,
  activeOpacity: ACTIVE_OPACITY,
  intervalTime: 60,
  onPressBtn: NOOP,
  onStop: NOOP,
  captchaLength: 6,
  collectValidate: NOOP,
  name: 'SMS_CODE_INPUT',
  readableName: '短信验证码',
  onChangeText: NOOP,
  autoFocus: true,
  getInput: NOOP,
  hitSlop: null,
};
```
