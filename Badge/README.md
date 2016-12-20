# Badge

角标

通常用来显示未读消息数目。

## Demo

![](demo.png)

## Document

### Props

```js
Badge.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 自定义数字样式
  numberStyle: View.propTypes.style,
  // 角标文本内容
  text: PropTypes.string,
  // 主体元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
Badge.defaultProps = {
  style: null,
  numberStyle: null,
  text: '',
  children: null,
};
```

### Other Points

- Badge 没有宽度，跨度随外部容器变化
