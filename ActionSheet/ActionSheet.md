#### Demo

![ActionSheet](http://wx4.sinaimg.cn/mw690/4c8b519dly1feq4asyl44g20hs0wsguv.gif)

#### Example

```JavaScript
import ActionSheet from 'rnx-ui/ActionSheet';

function Example(props) {
  return (
    <ActionSheet
      visible={this.state.visible}
      onClose={this.hide}
      btnList={[{
        text: '默认',
        onPress: this.hide,
      }, {
        text: '相册',
        onPress: this.hide,
      }]}
    />
  );
}
```
 
 
