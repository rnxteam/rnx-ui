#### Demo

![ImgPicker](https://github.com/wangkexinW/rnx-ui/blob/doc/ImgPicker/ImgPicker.png?raw=true)

#### Example

```JavaScript
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

