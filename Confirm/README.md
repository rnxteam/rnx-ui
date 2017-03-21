# Confirm

**确认弹框组件**

## Demo

![Confirm](http://wx3.sinaimg.cn/mw690/4c8b519dly1fdulcvgrcvg20hs0ws7h6.gif)

## Props

```js
Confirm.propTypes = {
  ...Dialog.propTypes,
  // 取消按钮文本
  cancelText: PropTypes.string,
  // 取消按钮文本样式
  cancelTextStyle: Text.propTypes.style,
  // 取消按钮点击回调
  onCancel: PropTypes.func,
  // 确认按钮文本
  confirmText: PropTypes.string,
  // 确认按钮文本样式
  confirmTextStyle: Text.propTypes.style,
  // 确认按钮点击回调
  onConfirm: PropTypes.func,
};
Confirm.defaultProps = {
  ...Dialog.defaultProps,
  cancelText: '取消',
  cancelTextStyle: null,
  onCancel: NOOP,
  confirmText: '确认',
  confirmTextStyle: null,
  onConfirm: NOOP,
};
```

## Other Points

- 内部封装了 Dialog 组件，覆盖了 Dialog 的 `buttons` 属性，其他不变，请参考 [Dialog](https://github.com/dragonwong/rnx-ui/tree/master/Dialog)
