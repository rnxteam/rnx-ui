# Alert

**警告弹框组件**

## Demo

![Alert](http://wx4.sinaimg.cn/mw690/4c8b519dly1fduijhj36dg20hs0ws48p.gif)

## Props

```js
Alert.propTypes = {
  ...Dialog.propTypes,
  // 按钮文本
  buttonText: PropTypes.string,
  // 按钮文本样式
  buttonTextStyle: Text.propTypes.style,
  // 按钮点击回调
  onPress: PropTypes.func,
};
Alert.defaultProps = {
  ...Dialog.defaultProps,
  buttonText: '好',
  buttonTextStyle: null,
  onPress: NOOP,
};
```

## Other Points

- 内部封装了 Dialog 组件，覆盖了 Dialog 的 `buttons` 属性，其他不变，请参考 [Dialog](https://github.com/dragonwong/rnx-ui/tree/master/Dialog)
