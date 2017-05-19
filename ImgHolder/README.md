# ImgHolder

**带占位的图片组件**

## Demo

<image src="http://wx4.sinaimg.cn/mw1024/4c8b519dgy1ffczm94y89g20nc12cjze.gif" width="320" />

## Props

```js
ImgHolder.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 图片资源
  source: Image.propTypes.source,
  // 图片样式
  imgStyle: Image.propTypes.style,
  // 占位元素
  holder: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 图片加载完成是否移除 holder
  autoRemoveHolder: PropTypes.bool,
};
ImgHolder.defaultProps = {
  style: null,
  source: {
    uri: '',
  },
  imgStyle: null,
  holder: null,
  autoRemoveHolder: false,
};
```
