# KeyboardAdaptiveView

**适应键盘的容器**

> 当你找到这个组件时，你应该是遇到输入框被键盘遮挡的问题了。**请你再三跟产品/设计/开发确认，是否真的有必要将输入框放在页面的偏下位置**，这是 APP 开发历史悠久的坑，**任何经验丰富的从业者/主流的 APP 都会极力避免这种场景**，考虑下从根本解决这个问题，比如上移输入框的位置或者干脆新开一个页面？

> 当然不是说 `KeyboardAdaptiveView` 这个组件不好，相反，`KeyboardAdaptiveView` 非常有效，完全碾压 react-native 官方组件 `KeyboardAvoidingView`（既然来找 `KeyboardAdaptiveView` 相信你一定是被官方的那个组件坑了😄）。

在 iOS 设备中，处于滚动视图（`ScrollView` 或 `ListView`）中的输入控件（`TextInput`）如果处于页面偏下位置，常常容易被弹起的键盘遮住。于是，可以使用 `KeyboardAdaptiveView` 解决这个问题。

### ⚠️ 注意

1. `KeyboardAdaptiveView` 会针对不同位置的 `TextInput` 进行不同位移，所以必须在每一个 `TextInput` 的 `onFocus` 时触发 `KeyboardAdaptiveView` 的 `inputFocusHandle` 方法，并将事件对象作为参数传入。

2. 为了提升用户体验，强烈建议 iOS 在外层滚动视图（`ScrollView` 或 `ListView`）上添加 `keyboardDismissMode="on-drag"` 属性，在视图滚动时自动关闭键盘。对此 `KeyboardAdaptiveView` 也为你准备好适合的 `keyboardDismissMode` 值了，直接引用即可。

3. `KeyboardAdaptiveView` 也提供了对安卓设备的支持，但是默认不会处理，当你确认要开启时，请确保禁用系统的处理。

具体操作请参考 Example。

## Demo

<image src="http://wx2.sinaimg.cn/mw690/4c8b519dly1fbztgmfj0lg20ho0wgqv8.gif" width="320" />

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
  // 最小键盘高度
  minKbdHeight: PropTypes.number,
  // 安卓系统是否处理
  handlerAndroid: PropTypes.bool,
};
KeyboardAdaptiveView.defaultProps = {
  getEl: NOOP,
  style: null,
  children: null,
  moreDistance: 40,
  minKbdHeight: 250,
  handlerAndroid: false,
};
```
