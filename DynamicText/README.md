# DynamicText

**自动滚动的文本框**

文字超长时可以自动滚动

### ⚠️ 注意

DynamicText 有 `maxWidth` 属性可以配置支持的最大的文本长度，当文本长度超过配置时，文本会显示为多行，此时需要配置更大的长度。

## Demo

<image src="http://wx4.sinaimg.cn/large/7c8d1581ly1fitrj414kag206o0a01l1.gif" width="320" />

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
  // cycle: 无限循环播放，头尾相连
  mode: PropTypes.oneOf(["restart", "reverse", "cycle"]),
  // 动画间隔时间，默认500
  bufferTime: PropTypes.number,
  // 文字滚动速度，默认5，数字越大，速度越快
  speed: PropTypes.number,
  // 文本最大宽度
  maxWidth: PropTypes.number,
  // MODE_RESTART, MODE_REVERSE 到末尾再开始滚动的延迟
  delayTime: PropTypes.number,
};
DynamicText.defaultProps = {
  style: null,
  textStyle: null,
  children: null,
  mode: "cycle",
  bufferTime: 1000,
  speed: 5,
  maxWidth: 1000,
  delayTime: 500,
};
```
