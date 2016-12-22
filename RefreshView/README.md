# RefreshView

滚动框

带惯性、下拉刷新功能。

配套组件：[RefreshControl](./RefreshControl/README.md)

## Demo

![](./RefreshControl/demo.gif)

## Document

### Props

```js
RefreshView.propTypes = {
  // 超出范围时的减速度
  overA: PropTypes.number,
  // 超出范围时最大速度
  maxOverV: PropTypes.number,
  // 拖拽超出范围时的减速度
  dragOverA: PropTypes.number,
  // 渲染间隔时间
  renderInterval: PropTypes.number,
  // 弹性恢复时间
  recoverTime: PropTypes.number,
  // 刷新控件恢复时间
  refreshControlRecoverTime: PropTypes.number,
  // 到达刷新状态所需的距离
  refreshDistance: PropTypes.number,
  // 下拉刷新控件
  refreshControl: (props, propName, componentName) => {
    const type = props[propName].type;
    if (!type || type !== RefreshControl) {
      throw new Error(
        `${componentName}'s props \`refreshControl\` should be an instance of \`RefreshControl\``
      );
    }
  },
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
RefreshView.defaultProps = {
  overA: 0.05,
  maxOverV: 3,
  dragOverA: 2.5,
  renderInterval: 16,
  recoverTime: 200,
  refreshControlRecoverTime: 100,
  refreshDistance: 60,
  refreshControl: null,
  children: null,
};
```

## Todo

1. 上拉加载
2. 初始状态即为 loading 状态
