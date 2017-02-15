# ImgPicker

**图片选择组件**

## Example

```js
import ImgPicker from 'rnx-ui/ImgPicker';

function Example(props) {
  return (
    <ImgPicker
      images={this.state.images}
      adder={
        <Icon name="add" style={styles.imgPickerAdder} />
      }
      adderVisible={this.state.images.length < MAX_PHOTOS_NUMBER}
      imgDisplayerProps={{
        onImgPress: this.showPhoto,
        deleter: (
          <Icon name="close" style={styles.imgPickerDeleterIcon} />
        ),
        onDeleterPress: this.removePhoto,
      }}
      onAdderPress={this.openCameraActionSheet}
    />
  );
}
```

## Props

```js
ImgPicker.propTypes = {
  // 图片 uri 数组
  images: PropTypes.arrayOf(PropTypes.string),
  // ImgDisplayer 属性
  imgDisplayerProps: PropTypes.shape(ImgDisplayer.propTypes),
  // 自定义样式
  style: View.propTypes.style,
  // 每项自定义样式
  itemStyle: View.propTypes.style,
  // 添加按钮自定义样式
  adderBtnStyle: View.propTypes.style,
  // 添加按钮点击回调
  onAdderPress: PropTypes.func,
  // 添加按钮内容元素
  adder: PropTypes.element,
  // 是否显示添加按钮
  adderVisible: PropTypes.bool,
  // 添加按钮点击颜色反馈
  deleterUnderlayColor: PropTypes.string,
};
ImgPicker.defaultProps = {
  images: [],
  imgDisplayerProps: ImgDisplayer.defaultProps,
  style: null,
  itemStyle: null,
  adderBtnStyle: null,
  onAdderPress: NOOP,
  adder: <Text style={styles.adderText}>+</Text>,
  adderVisible: true,
  deleterUnderlayColor: '#dfdfdf',
};
```
