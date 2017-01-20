# KeyboardAdaptiveView

**适应键盘的容器**

在 iOS 设备中，处于滚动视图（`ScrollView` 或 `ListView`）中的输入控件（`TextInput`）如果处于页面偏下位置，常常容易被弹起的键盘遮住。于是，可以使用 `KeyboardAdaptiveView` 解决这个问题。

> 官方提供了 `KeyboardAvoidingView` 组件也是为了解决这个问题，不过又复杂又不好用，`KeyboardAdaptiveView` 比它不知道高到哪里去了。

为了提升用户体验，强烈建议 iOS 在外层滚动视图（`ScrollView` 或 `ListView`）上添加 `keyboardDismissMode="on-drag"` 属性，在视图滚动时自动关闭键盘。对此 `KeyboardAdaptiveView` 也为你准备好适合的 `keyboardDismissMode` 值了，直接引用即可。

## Demo

![KeyboardAdaptiveView](http://wx2.sinaimg.cn/mw690/4c8b519dly1fbx5067tdqg20ho0wgnpd.gif)

## Example

```js
import KeyboardAdaptiveView, {
  keyboardDismissMode,
} from 'rnx-ui/Drop';

function DropperImg(props) {
  return (
    <ScrollView
      style={styles.scrollView}
      keyboardDismissMode={keyboardDismissMode}
    >
      <KeyboardAdaptiveView>
        <View style={styles.placeholder}>
          <Text>Placeholder</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="single line"
            style={styles.input}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            multiline
            placeholder="multi line"
            style={styles.input}
          />
        </View>
      </KeyboardAdaptiveView>
    </ScrollView>
  );
}
```

## Props

```js
KeyboardAdaptiveView.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
KeyboardAdaptiveView.defaultProps = {
  style: null,
  children: null,
};
```
