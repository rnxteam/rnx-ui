# ImgRollView

**图片多选组件**

## Example

```js
import ImgRollView from 'rnx-ui/ImgPicker';

function Example(props) {
  return (
    <ImgRollView
      onSelect={this.onSelect}
      style={style.imgRollViewStyle}
      maxSelected={5}
      iconSelected={<Icon name="fa-check" style={style.iconStyle} />}
      iconUnSelected={<Icon name="fa-check" style={style.iconStyle} />}
    />
  );
}
```

## Props

```js
ImgRollView.propTypes = {
  // 最大照片选择条数
  maxSelected: PropTypes.number,
  // 图片间像素间隔
  gap: PropTypes.number,
  // 每行显示的图片数量
  imagesPerRow: PropTypes.number,
  // 静态资源类型，默认为 Photos
  assetType: PropTypes.oneOf([
    'Photos',
    'Videos',
    'All',
  ]),
  // 用户选择图片时触发的回调，返回参数为 node/uri/selected/uriSelected
  onSelect: PropTypes.func,
  // 选中图标
  iconSelected: PropTypes.element,
  // 未选中图标
  iconUnSelected: PropTypes.element,
  // 初始选中 uri
  uriList: PropTypes.arrayOf(PropTypes.string),
  // 外层容器样式
  style: styleShape,
  // 选中图标外框样式
  iconSelectedStyle: styleShape,
  // 未选中图标外框样式
  iconUnSelectedStyle: styleShape,
};

ImgRollView.defaultProps = {
  maxSelected: 10,
  gap: 8,
  imagesPerRow: 4,
  assetType: 'Photos',
  iconSelected: <Text style={style.tickInner}>v</Text>,
  iconUnSelected: <Text style={style.tickInner}>x</Text>,
  onSelect: () => {},
  uriList: [],
};
```
