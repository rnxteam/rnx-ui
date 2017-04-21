#### Example

```JavaScript
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

### ⚠️ 注意

CameraRoll 提供了访问本地相册的功能。在iOS上使用这个模块之前，你需要先链接 RCTCameraRoll 库，具体做法请参考[链接原生库文档](https://reactnative.cn/docs/0.42/linking-libraries-ios.html)。另外，从 iOS10 开始，访问相册需要用户授权。你需要在 `Info.plist` 中添加一条名为 `NSCameraUsageDescription` 的键，然后在其值中填写向用户请求权限的具体描述。编辑完成后这个键在 Xcode 中实际会显示为 `Privacy - Camera Usage Description`。

