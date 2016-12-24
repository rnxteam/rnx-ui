# Sheet

底部弹层

底部弹层弹出会有动画。

## Demo

![navBar demo](demo.gif)

## Document

### Props

```js
Sheet.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 遮罩层样式
  modalStyle: View.propTypes.style,
  // 关闭回调（动画结束时）
  onClose: PropTypes.func,
  // 遮罩点击事件
  onPressModal: PropTypes.func,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 动画时长
  duration: PropTypes.number,
};
Sheet.defaultProps = {
  style: null,
  visible: false,
  modalStyle: null,
  onClose: NOOP,
  onPressModal: NOOP,
  children: null,
  duration: 200,
};
```

### Other Points

- 子组件点击事件会穿透从而被遮罩层捕获，如需处理，请在子组件上加上点击事件进行拦截
