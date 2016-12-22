# RefreshControl

下拉刷新控件

需在 [RefreshView](../) 中使用。

## Document

下拉刷新有如下三种状态：
* 0: 「下拉刷新」初始状态，可下拉
* 1: 「松开刷新」下拉距离到达刷新点
* 2: 「刷新中...」正在刷新

### Props

```js
RefreshControl.propTypes = {
  // 标识是否处于刷新状态
  isRefreshing: PropTypes.bool.isRequired,
  // 从状态 1 进入状态 0 时触发
  onPull: PropTypes.func,
  // 状态 0 时持续触发，参数为拉动的距离
  onPulling: PropTypes.func,
  // 到达刷新点时触发
  onReadyToRefresh: PropTypes.func,
  // 到达刷新点后松手时触发
  onRefresh: PropTypes.func,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 自定义样式
  style: View.propTypes.style,
};
RefreshControl.defaultProps = {
  isRefreshing: false,
  onPull: NOOP,
  onPulling: NOOP,
  onReadyToRefresh: NOOP,
  onRefresh: NOOP,
  children: null,
  style: null,
};
```
