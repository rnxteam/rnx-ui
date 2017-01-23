# Template

**模板**

详细介绍

### ⚠️ 注意

## Demo

![400*650](demo.png)

## Example

```js
import Template from 'rnx-ui/Template';

function Example(props) {
  return (
    <Template />
  );
}
```

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
