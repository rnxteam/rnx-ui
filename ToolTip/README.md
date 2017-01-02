# ToolTip

提示框

## Demo

![navBar demo](demo.png)

## Document

### Props

```js
ToolTip.propTypes = {
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 显示文本
  text: PropTypes.string.isRequired,
  // 遮罩层样式
  overlayStyle: View.propTypes.style,
  // 文本容器样式
  textWrapperStyle: View.propTypes.style,
  // 文本样式
  textStyle: Text.propTypes.style,
  // 控制 Overlay 是否可以作为触控事件的目标
  pointerEvents: Overlay.propTypes.pointerEvents,
};
ToolTip.defaultProps = {
  visible: false,
  text: '',
  overlayStyle: null,
  textWrapperStyle: null,
  textStyle: null,
  pointerEvents: 'none',
};
```

### Other Points

- 内部封装了 Overlay 组件，请参考 [Other Points - Overlay](https://github.com/dragonwong/rnx-ui/tree/master/Overlay#other-points)
