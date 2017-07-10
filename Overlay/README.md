# Overlay

**遮罩层**

具有渐隐渐显动画效果的遮罩层组件。

### ⚠️ 注意

1. 点击 Overlay 内部元素时也会触发 Overlay 的 `onPress` 回调。如果需要避免该情况，请在内部元素外包裹 `Touchable*` 元素，用来捕获点击事件并阻止其冒泡。

1. Overlay 默认撑满父容器，且父容器需要设置样式属性 `position` 为 `'absolute'` 或 `'relative'`。

1. Overlay 不会阻止安卓物理返回键。

## Demo

<image src="http://wx2.sinaimg.cn/mw690/4c8b519dly1fdlfglw0mfg20hs0wsn3p.gif" width="320" />

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
  // 控制 Overlay 是否可以作为触控事件的目标（参考 https://facebook.github.io/react-native/docs/view.html#pointerevents）
  pointerEvents: View.propTypes.pointerEvents,
  // 动画时长
  duration: PropTypes.number,
  // 是否使用动画
  useAnimation: PropTypes.bool,
};
Overlay.defaultProps = {
  visible: false,
  onPress: NOOP,
  style: null,
  children: null,
  pointerEvents: 'auto',
  duration: 200,
  useAnimation: true,
};
```
