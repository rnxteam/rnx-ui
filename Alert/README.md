# Alert

**警告弹框**

## Demo

![Alert](http://wx1.sinaimg.cn/mw690/4c8b519dly1fcg1ejqa8og20hs0wsqmr.gif)

## Example

```js
import Alert from 'rnx-ui/Alert';

function Example(props) {
  return (
    <Alert
      visible={this.state.visible}
      title="无法连接服务器"
      message="未能完成所请求的操作，因为与服务器的通信出错。"
      buttons={[{
        text: '吼啊',
        onPress: this.hide,
      }]}
    />
  );
}
```

## Props

```js
Alert.propTypes = {
  // 是否显示
  visible: PropTypes.bool,
  // 标题
  title: PropTypes.string,
  // 内容
  message: PropTypes.string,
  // 按钮
  buttons: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    style: Text.propTypes.style,
    onPress: PropTypes.func,
  })),
  // 遮罩层样式
  overlayStyle: View.propTypes.style,
};
Alert.defaultProps = {
  visible: true,
  title: '',
  message: '',
  buttons: [{
    text: '好',
    style: null,
    onPress: NOOP,
  }],
  overlayStyle: null,
};
```
