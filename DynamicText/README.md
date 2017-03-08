# DynamicText

**文本框，文字超长时滚动显示**

## Demo

![DynamicText](http://wx2.sinaimg.cn/mw690/955e9ff1ly1fdfh4vydffg20b40hse84.gif)

## Example

```js
import DynamicText from 'rnx-ui/DynamicText';

function Example(props) {
  return (
    <DynamicText text="自定义文字"></DynamicText>
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
  text: PropTypes.string,
  // 文字循环模式，默认reverse
  // reverse：轮转到末尾后再轮转回开头
  // restart: 轮转到末尾后返回至开头重新循环
  mode: PropTypes.oneOf(['reverse', 'restart']),
  // 动画间隔时间，默认500
  bufferTime: PropTypes.number,
  // 文字滚动速度，默认5，数字越大，速度越快
  speed: PropTypes.number,
};
DynamicText.defaultProps = {
  style: null,
  textStyle: null,
  text: null,
  mode: 'reverse',
  bufferTime: 500,
  speed: 5,
};
```
