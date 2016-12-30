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

- Overlay 默认撑满父容器，且父容器需要设置样式属性 `position` 为 `'absolute'` 或 `'relative'`
- Overlay 不会阻止安卓物理返回键
