# ImgRollView

**图片多选组件**

### ⚠️ 注意

CameraRoll 提供了访问本地相册的功能。在iOS上使用这个模块之前，你需要先链接 RCTCameraRoll 库，具体做法请参考[链接原生库文档](https://reactnative.cn/docs/0.42/linking-libraries-ios.html)。另外，从 iOS10 开始，访问相册需要用户授权。你需要在 `Info.plist` 中添加一条名为 `NSCameraUsageDescription` 的键，然后在其值中填写向用户请求权限的具体描述。编辑完成后这个键在 Xcode 中实际会显示为 `Privacy - Camera Usage Description`。

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
