# All

**页面容器**

页面级容器，内置了 `StatusBar`。

## Example

```js
import All from 'rnx-ui/All';

function Example(props) {
  return (
    <All />
  );
}
```

## Props

```js
All.propTypes = {
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 自定义样式
  style: View.propTypes.style,
  // StatusBar 背景色
  statusBarBgColor: PropTypes.string,
  // StatusBar 样式类型
  statusBarStyle: PropTypes.string,
};
All.defaultProps = {
  children: null,
  style: null,
  barColor: COLOR_BG_DARK,
  barStyle: 'light-content',
};
```
