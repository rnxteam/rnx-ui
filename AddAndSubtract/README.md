# AddAndSubtract

**加减法动画组件**

带有动画的加减法组件

## Demo

![AddAndSubtract](http://wx2.sinaimg.cn/mw690/4c8b519dgy1fc9vmc4ddng20ho0wgwsc.gif)

## Example

```js
import Template from 'rnx-ui/Template';

function Example(props) {
  return (
    <AddAndSubtract
      num={this.state.num}
      onPressAdder={this.add}
      onPressSubtracter={this.subtract}
    />
  );
}
```

## Props

```js
AddAndSubtract.propTypes = {
  // 数字
  num(props, propName) {
    const num = props[propName];
    if (typeof num !== 'number') {
      return new Error('AddAndSubtract.props.num must be a number.');
    }
    if (num < 0) {
      return new Error('AddAndSubtract.props.num must be greater than 0.');
    }
    return null;
  },
  // 加法按钮点击事件
  onPressAdder: PropTypes.func,
  // 减法按钮点击事件
  onPressSubtracter: PropTypes.func,
  // 动画时间
  duration: PropTypes.number,
  // 减法按钮移动距离
  distance: PropTypes.number,
  // 减法旋转角度
  deg: PropTypes.number,
  // 动画函数
  easing: PropTypes.func,
  // 按钮宽度
  btnWidth: PropTypes.number,
  // 自定义样式
  style: View.propTypes.style,
  // 加法按钮样式
  adderStyle:  View.propTypes.style,
  // 减法按钮样式
  subtracterStyle:  View.propTypes.style,
  // 自定义字体样式
  textStyle: Text.propTypes.style,
  // 加法按钮
  adder: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 减法按钮
  subtracter: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  hitSlop: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
  }),
};
```
