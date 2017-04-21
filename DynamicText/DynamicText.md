#### Demo

![DynamicText](http://wx4.sinaimg.cn/mw690/4c8b519dly1fdrlqh8ujsg20hs0ws4qq.gif)

#### Example

```JavaScript
import DynamicText from 'rnx-ui/DynamicText';

function Example(props) {
  return (
    <DynamicText>自定义文字</DynamicText>
  );
}
```
### ⚠️ 注意

DynamicText 有 `maxWidth` 属性可以配置支持的最大的文本长度，当文本长度超过配置时，文本会显示为多行，此时需要配置更大的长度。
