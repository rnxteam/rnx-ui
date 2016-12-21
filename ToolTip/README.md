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
  modalStyle: View.propTypes.style,
  // 文本容器样式
  textWrapperStyle: View.propTypes.style,
  // 文本样式
  textStyle: Text.propTypes.style,
};
ToolTip.defaultProps = {
  visible: false,
  text: '',
  modalStyle: null,
  textWrapperStyle: null,
  textStyle: null,
};
```
