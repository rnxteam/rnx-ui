# CardView

**卡片视图**

以卡片样式浏览，并可以设置激活卡片样式。

## Demo

![CardView](http://wx3.sinaimg.cn/mw690/4c8b519dly1fdgvohgt53g20hs0wsaip.gif)

## Example

```js
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

## Props

```js
CardView.propTypes = {
  // 样式
  style: View.propTypes.style,
  // 当前卡片样式
  activeCardStyle: View.propTypes.style,
  // 卡片数组
  cards: PropTypes.arrayOf(PropTypes.shape({
    /* eslint-disable */
    // 数组循环优化标示 key
    key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // 卡片元素
    card: PropTypes.element,
    /* eslint-enable */
  })),
  // 卡片宽度
  cardWidth: PropTypes.number,
  // 卡片间隔
  cardGap: PropTypes.number,
  // 自定义内容容器样式
  contentContainerStyle: View.propTypes.style,
  // 卡片切换时的回调
  onChange: PropTypes.func,
  // 速度指数
  v: PropTypes.number,
  // 手势滑动触发最小距离（默认需要滑动卡片一半的距离）
  minGestureDistance: PropTypes.number,
  // 最大可访问的卡片序号
  maxIndex: PropTypes.number,
  // 获取元素回调
  getEl: PropTypes.func,
};
CardView.defaultProps = {
  style: null,
  activeCardStyle: null,
  cards: [],
  cardWidth: 200,
  cardGap: 0,
  contentContainerStyle: null,
  onChange: () => {},
  v: 20,
  minGestureDistance: null,
  maxIndex: null,
  getEl: NOOP,
};
```
