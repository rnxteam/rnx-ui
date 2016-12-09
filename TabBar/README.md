# TabBar

横向点击栏

## Demo

## Document

### Props

```js
TabBar.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // tab 项
  items: PropTypes.arrayOf(PropTypes.shape({
    // tab 项 id
    id: PropTypes.string,
    // tab 项默认元素
    defaultComponent: PropTypes.element,
    // tab 项激活元素
    activedComponent: PropTypes.element,
  })),
  // tab 项点击时透明度
  activeOpacity: PropTypes.number,
  // 改变激活项时的回调，激活项的 id 会作为参数传入
  onChange: PropTypes.func,
};
TabBar.defaultProps = {
  style: null,
  items: [{}],
  activeOpacity: 1,
  onChange: () => {},
};
```
