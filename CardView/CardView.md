
#### 基本用法
以卡片样式浏览，并可以设置激活卡片样式。

#### Demo

![CardView](http://wx3.sinaimg.cn/mw690/4c8b519dly1fdgvohgt53g20hs0wsaip.gif)

#### Example

```JavaScript
import CardView from 'rnx-ui/CardView';

function Example(props) {
  return (
    <CardView
      style={styles.cardView}
      cards={this.state.cards}
      cardGap={20}
      onChange={this.onChange}
    />
  );
}
```

### ⚠️ 注意

CardView 会为卡片添加 `isActiveRnxUiCardView` 属性，激活卡片值为 `true`，其他卡片是 `false`。


