# Loading

**菊花加载器**

## Demo

![Loading Demo](demo.png)

## Props

```js
Loading.propTypes = {
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 遮罩层样式
  overlayStyle: View.propTypes.style,
  // 菊花容器样式
  loaderStyle: View.propTypes.style,
  // 菊花图标的颜色
  color: ActivityIndicator.propTypes.color,
  // 菊花图标的大小
  size: ActivityIndicator.propTypes.size,
  // 是否使用 Overlay 动画
  useOverlayAnimation: PropTypes.bool,
  // Overlay 动画时长
  overlayAnimationDuration: PropTypes.number,
  // 显示回调
  onShow: PropTypes.func,
  // 隐藏回调
  onHide: PropTypes.func,
};
Loading.defaultProps = {
  visible: false,
  overlayStyle: null,
  loaderStyle: null,
  color: '#fff',
  size: 'small',
};
```

## Other Points

- 内部封装了 Overlay 组件，请参考 [Overlay](https://github.com/dragonwong/rnx-ui/tree/master/Overlay)
