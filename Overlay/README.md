# Overlay

遮罩层

内部封装了 Modal 组件

## Demo

![](demo.png)

## Document

### Props

```js
Overlay.propTypes = {
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 点击回调
  onPress: PropTypes.func,
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
Overlay.defaultProps = {
  visible: false,
  onPress: NOOP,
  style: null,
  children: null,
};
```

### Other Points

- 该组件会阻止安卓的物理返回键
