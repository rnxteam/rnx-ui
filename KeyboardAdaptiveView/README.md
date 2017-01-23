# KeyboardAdaptiveView

**适应键盘的容器**

在 iOS 设备中，处于滚动视图（`ScrollView` 或 `ListView`）中的输入控件（`TextInput`）如果处于页面偏下位置，常常容易被弹起的键盘遮住。于是，可以使用 `KeyboardAdaptiveView` 解决这个问题。

> 官方提供了 `KeyboardAvoidingView` 组件也是为了解决这个问题，不过又复杂又不好用，`KeyboardAdaptiveView` 比它不知道高到哪里去了。

### ⚠️ 注意

1. `KeyboardAdaptiveView` 会针对不同位置的 `TextInput` 进行不同位移，所以必须在每一个 `TextInput` 的 `onFocus` 时触发 `KeyboardAdaptiveView` 的 `inputFocusHandle` 方法，并将事件对象作为参数传入。

2. 为了提升用户体验，强烈建议 iOS 在外层滚动视图（`ScrollView` 或 `ListView`）上添加 `keyboardDismissMode="on-drag"` 属性，在视图滚动时自动关闭键盘。对此 `KeyboardAdaptiveView` 也为你准备好适合的 `keyboardDismissMode` 值了，直接引用即可。

具体操作请参考 Example。

## Demo

![KeyboardAdaptiveView](http://wx2.sinaimg.cn/mw690/4c8b519dly1fbztgmfj0lg20ho0wgqv8.gif)

## Example

```js
import KeyboardAdaptiveView, {
  keyboardDismissMode,
} from 'rnx-ui/Drop';

class Example extends Component {
  constructor(props) {
    super(props);
    this.getKeyboardAdaptiveView = this.getKeyboardAdaptiveView.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus(e) {
    if (this.keyboardAdaptiveView) {
      this.keyboardAdaptiveView.inputFocusHandle(e);
    }
  }
  getKeyboardAdaptiveView(el) {
    this.keyboardAdaptiveView = el;
  }

  render() {
    return (
      <ScrollView
        keyboardDismissMode={keyboardDismissMode}
      >
        <KeyboardAdaptiveView
          getEl={this.getKeyboardAdaptiveView}
        >
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onFocus={this.onFocus}
            />
          </View>
        </KeyboardAdaptiveView>
      </ScrollView>
    );
  }
}
```

## Props

```js
KeyboardAdaptiveView.propTypes = {
  // 获取元素回调
  getEl: PropTypes.func,
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 更多距离。iOS 系统键盘可能会出现 suggest 行，导致键盘高度获取不准确。
  moreDistance: PropTypes.number,
};
KeyboardAdaptiveView.defaultProps = {
  getEl: NOOP,
  style: null,
  children: null,
  moreDistance: 40,
};
```
