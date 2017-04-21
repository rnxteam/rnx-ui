
#### Demo

![Dialog](http://wx3.sinaimg.cn/mw690/4c8b519dly1fdulkkgmsog20hs0wsn81.gif)

#### Example

```JavaScript
import Dialog from 'rnx-ui/Dialog';

function Example(props) {
  return (
    <Dialog
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

