# DynamicText

**自动滚动的文本框**

文字超长时可以自动滚动

### ⚠️ 注意

DynamicText 有 `maxWidth` 属性可以配置支持的最大的文本长度，当文本长度超过配置时，文本会显示为多行，此时需要配置更大的长度。

## Demo

<image src="http://wx4.sinaimg.cn/mw690/4c8b519dly1fdrlqh8ujsg20hs0ws4qq.gif" width="320" />

## Example

```js
import DynamicText from 'rnx-ui/DynamicText';

function Example(props) {
  return (
    <DynamicText>自定义文字</DynamicText>
  );
}
```

## Props

```js
DynamicText.propTypes = {
  // 自定义wrapper样式
  style: View.propTypes.style,
  // 自定义文本样式
  textStyle: Text.propTypes.style,
  // 显示文本
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // 文字循环模式，默认reverse
  // reverse：轮转到末尾后再轮转回开头
  // restart: 轮转到末尾后返回至开头重新循环
  mode: PropTypes.oneOf([MODE_RESTART, MODE_REVERSE]),
  // 动画间隔时间，默认500
  bufferTime: PropTypes.number,
  // 文字滚动速度，默认5，数字越大，速度越快
  speed: PropTypes.number,
  // 文本最大宽度
  maxWidth: PropTypes.number,
};
DynamicText.defaultProps = {
  style: null,
  textStyle: null,
  children: null,
  mode: MODE_REVERSE,
  bufferTime: 1000,
  speed: 5,
  maxWidth: 1000,
};
```
