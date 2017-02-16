# PlaceholderText

**有占位元素的文本显示组件**

## Example

```js
import PlaceholderText from 'rnx-ui/PlaceholderText';

function Example(props) {
  return (
    <PlaceholderText
      placeholder={this.placeholder}
    />
  );
}
```

## Props

```js
PlaceholderText.propTypes = {
  // 值
  value: PropTypes.string,
  // 值自定义样式
  valueStyle: Text.propTypes.style,
  // 自定义样式
  style: View.propTypes.style,
  // 占位元素
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 占位元素样式（placeholder 为字符串时才生效）
  placeholderStyle: Text.propTypes.style,
  // 点击回调
  onPress: PropTypes.func,
  // 用来在校验器中做标识
  name: PropTypes.string,
  // 用来在校验器中组成错误信息
  readableName: PropTypes.string,
  // 校验器接口
  collectValidate: PropTypes.func,
  // 是否必要
  required: PropTypes.bool,
};
PlaceholderText.defaultProps = {
  value: '',
  valueStyle: null,
  style: null,
  placeholder: '',
  placeholderStyle: null,
  onPress: NOOP,
  name: '',
  readableName: '',
  collectValidate: NOOP,
  required: false,
};
```
