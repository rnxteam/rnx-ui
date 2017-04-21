#### Demo

![AddAndSubtract](http://wx3.sinaimg.cn/mw690/4c8b519dly1fcaq7v2pnvg20ho0wgh0z.gif)

#### Example

```JavaScript
import Template from 'rnx-ui/Template';

function Example(props) {
  return (
    <AddAndSubtract
      num={this.state.num}
      onPressAdder={this.add}
      onPressSubtracter={this.subtract}
    />
  );
}
```

