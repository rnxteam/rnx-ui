# Overlay

**遮罩层**

### ⚠️ 注意

1. Overlay 默认撑满父容器，且父容器需要设置样式属性 `position` 为 `'absolute'` 或 `'relative'`。

2. Overlay 不会阻止安卓物理返回键。

## Demo

![](demo.png)

## Props

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
  // 控制 Overlay 是否可以作为触控事件的目标
  pointerEvents: View.propTypes.pointerEvents,
  // 动画时长
  duration: PropTypes.number,
};
Overlay.defaultProps = {
  visible: false,
  onPress: NOOP,
  style: null,
  children: null,
  pointerEvents: 'auto',
  duration: 200,
};
```
