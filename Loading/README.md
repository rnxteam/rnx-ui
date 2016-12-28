# Loading

菊花加载器

## Demo

![Loading Demo](demo.png)

## Document

### Props

```js
Loading.propTypes = {
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 遮罩层样式
  modalStyle: View.propTypes.style,
  // 菊花容器样式
  loaderStyle: View.propTypes.style,
  // 菊花图标的颜色
  color: ActivityIndicator.propTypes.color,
  // 菊花图标的大小
  size: ActivityIndicator.propTypes.size,
};
Loading.defaultProps = {
  visible: false,
  modalStyle: null,
  loaderStyle: null,
  color: '#fff',
  size: 'small',
};
```
