# Badge

**角标**

通常用来显示未读消息数目。

### ⚠️ 注意

1. 角标宽度是动态计算的，随角标内容的增长而变长。当你通过 `textStyle` 改变角标内容的字体大小时，注意配置相符的 `characterWidth`。

2. Badge 没有宽度，宽度随外部容器变化。

## Demo

<image src="http://wx3.sinaimg.cn/mw690/4c8b519dly1fgncst1pfhj20o0130gny.jpg" width="320" />


## Example

```js
import Badge from 'rnx-ui/Badge';

function Example(props) {
  return (
    <Badge text={8}>
      <Icon name="commenting-o" style={styles.icon} />
    </Badge>
  )
}
```

## Props

```js
Badge.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 自定义文本容器样式
  textContainerStyle: View.propTypes.style,
  // 自定义文本样式
  textStyle: Text.propTypes.style,
  // 单个字符宽度
  characterWidth: PropTypes.number,
  // 角标文本内容
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // 主体元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
Badge.defaultProps = {
  style: null,
  textContainerStyle: null,
  textStyle: null,
  characterWidth: 7,
  text: '',
  children: null,
};
```
