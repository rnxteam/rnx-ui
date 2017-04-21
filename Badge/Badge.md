
#### Demo

![Badge](https://github.com/wangkexinW/rnx-ui/blob/master/Badge/demo.png?raw=true)

#### Example

```JavaScript
import Badge from 'rnx-ui/Badge';

function Example(props) {
  return (
    <Badge text={8}>
      <Icon name="commenting-o" style={styles.icon} />
    </Badge>
  )
}
```
### ⚠️ 注意

1. 角标宽度是动态计算的，随角标内容的增长而变长。当你通过 `textStyle` 改变角标内容的字体大小时，注意配置相符的 `characterWidth`。

2. Badge 没有宽度，宽度随外部容器变化。

