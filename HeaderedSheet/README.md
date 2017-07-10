# HeaderedSheet

**有标题栏的底部弹层**

## Demo

<image src="http://wx4.sinaimg.cn/mw690/4c8b519dgy1fh4agk0ft3g20hc0wk4qp.gif" width="320" />

## Props

```js
HeaderedSheet.propTypes = {
  // 显示开关
  visible: Sheet.propTypes.visible,
  // 遮罩层样式
  overlayStyle: Sheet.propTypes.overlayStyle,
  // 关闭回调（动画结束时）
  onClose: Sheet.propTypes.onClose,
  // 遮罩点击事件
  onPressOverlay: Sheet.propTypes.onPressOverlay,
  // 动画时长
  duration: Sheet.propTypes.duration,
  // 自定容器义样式（包含 header 区域）
  containerStyle: Sheet.propTypes.style,
  // 自定义样式
  style: View.propTypes.style,
  // 自定义 header 样式
  headerStyle: View.propTypes.style,
  // 标题
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 标题文本样式（title 为字符串时才生效）
  titleStyle: Text.propTypes.style,
  // 标题到左右两边的距离
  titleGap: PropTypes.number,
  // 左侧按钮
  leftBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 左侧点击事件
  onPressLeftBtn: PropTypes.func,
  // 左侧按钮文本样式（leftBtn 为字符串时才生效）
  leftBtnStyle: Text.propTypes.style,
  // 右侧按钮
  rightBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 右侧点击事件
  onPressRightBtn: PropTypes.func,
  // 右侧按钮文本样式（rightBtn 为字符串时才生效）
  rightBtnStyle: Text.propTypes.style,
  // 按钮点击透明度变化
  activeOpacity: PropTypes.number,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
HeaderedSheet.defaultProps = {
  visible: false,
  overlayStyle: null,
  onClose: NOOP,
  onPressOverlay: NOOP,
  duration: 200,
  style: null,
  headerHeight: null,
  title: '',
  titleStyle: null,
  titleGap: 50,
  leftBtn: null,
  onPressLeftBtn: NOOP,
  leftBtnStyle: null,
  rightBtn: null,
  onPressRightBtn: NOOP,
  rightBtnStyle: null,
  activeOpacity: ACTIVE_OPACITY,
  children: null,
};
```

## Other Points

- 内部封装了 Overlay 组件，请参考 [Overlay](https://github.com/dragonwong/rnx-ui/tree/master/Overlay)
