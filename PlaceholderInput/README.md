# PlaceholderInput

**可以自定义占位元素的输入框**

React Native 提供的 `TextInput` 组件的 `placeholder` 可定制程度太低了，`PlaceholderInput` 应运而生。

## Example

```js
import PlaceholderInput from 'rnx-ui/PlaceholderInput';

function Example(props) {
  return (
    <PlaceholderInput />
  );
}
```

## Props

```js
PlaceholderInput.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 初始值
  defaultValue: PropTypes.string,
  // 自定义输入框样式
  inputStyle: TextInput.propTypes.style,
  // 占位元素
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 占位元素样式（placeholder 为字符串时才生效）
  placeholderStyle: Text.propTypes.style,
  // onChangeText 的第二个参数，同时在校验器中做标识
  name: PropTypes.string,
  // 用来在校验器中组成错误信息
  readableName: PropTypes.string,
  // 校验器接口
  collectValidate: PropTypes.func,
  // 是否必要
  required: PropTypes.bool,
  // 是否可禁用
  disabled: PropTypes.bool,
  // 输入回调
  onChangeText: PropTypes.func,
  // TextInput 属性
  textInputProps: PropTypes.object,
  // 获取 TextInput 元素
  getInput: PropTypes.func,
};
PlaceholderInput.defaultProps = {
  style: null,
  defaultValue: '',
  inputStyle: null,
  placeholder: '',
  placeholderStyle: null,
  name: '',
  readableName: '',
  collectValidate: NOOP,
  required: false,
  disabled: false,
  onChangeText: NOOP,
  textInputProps: {},
  getInput: NOOP,
};
```
