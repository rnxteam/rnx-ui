# <组件名>

<组件简介>

<详细介绍>

## Demo

![400*650](demo.png)

## Props

```js
Template.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
Template.defaultProps = {
  style: null,
  children: null,
};
```

## Other Points

-
