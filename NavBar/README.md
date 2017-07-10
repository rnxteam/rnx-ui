# NavBar

**导航栏**

## Demo

<image src="http://wx3.sinaimg.cn/mw690/4c8b519dgy1fh4b239blbg20nc12ctfn.gif" width="320" />

## Props

```js
NavBar.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // statusBar 高度
  statusBarHeight: PropTypes.number,
  // header 高度
  headerHeight: PropTypes.number,
  // 标题
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 标题文本样式（title 为字符串时才生效）
  titleStyle: Text.propTypes.style,
  // 标题到左右两边的距离
  titleGap: PropTypes.number,
  // 左侧按钮
  leftBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 左侧按钮点击事件
  leftEvent: PropTypes.func,
  // 左侧按钮文本样式（leftBtn 为字符串时才生效）
  leftBtnStyle: Text.propTypes.style,
  // 左侧按钮禁用
  leftBtnDisabled: PropTypes.bool,
  // 右侧按钮
  rightBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 右侧按钮点击事件
  rightEvent: PropTypes.func,
  // 右侧按钮文本样式（rightBtn 为字符串时才生效）
  rightBtnStyle: Text.propTypes.style,
  // 右侧按钮禁用
  rightBtnDisabled: PropTypes.bool,
  // 按钮点击透明度变化
  activeOpacity: PropTypes.number,
};
NavBar.defaultProps = {
  style: null,
  statusBarHeight: STATUS_BAR_HEIGHT,
  headerHeight: HEADER_HEIGHT,
  title: '',
  titleStyle: null,
  titleGap: 50,
  leftBtn: null,
  leftEvent: NOOP,
  leftBtnStyle: null,
  leftBtnDisabled: false,
  rightBtn: null,
  rightEvent: NOOP,
  rightBtnStyle: null,
  rightBtnDisabled: false,
  activeOpacity: ACTIVE_OPACITY,
};
```

## Other Points

- NavBar 的高度由 `statusBarHeight` 和 `headerHeight` 两部分组成。`statusBarHeight` 默认 iOS 为 20，Android 为 0；`headerHeight` 默认 iOS 为 44，Android 为 56。

- `titleGap` 用来控制 `title` 到左右两边的距离。在 `title` 为字符串且宽度超过这个距离时，标题会显示为自动剪切，并以 ‘...’ 结束。
