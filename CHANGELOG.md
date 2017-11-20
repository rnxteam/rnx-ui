# CHANGELOG

```
{n1}.{n2}.{n3}

n1：❤️ 重大更新
n2：💛 影响之前版本使用方式的更新（需要用户适配）
n3：💚 不影响之前版本使用方式的更新（不需要用户适配）
```

## 0.17.4-patch-5

### NumericKeyboard

- 💚 new props `bottomLeftButton`: config the button in bottom-left corner of the keyboard

## 0.17.4-patch-4

- 💚 Bugfix: fix display bug when there is only one button that is in touching state

## v0.17.4-patch-3

- 💚 new component for displaying progress：`Progress`

## v0.17.4-patch-1

### NavBar

- 💚 new props `hitSlop`：defines how far a touch event can start away from buttons in left and right

## 0.17.4

### Overlay

- 💚 Bugfix: fix props `duration` not work in the hide animation

## 0.17.3

### AddAndSubtract

- 💚 新增属性 `adderUnderlayColor`：加法元素触摸时底色
- 💚 新增属性 `subtracterUnderlayColor`：减法元素触摸时底色

### ActionSheet

- 💚 修复安卓下只显示一行菜单时下边框无圆角的 bug

## 0.17.2

### Sheet

- 💚 修复隐藏之后快速展示时不显示内容的 bug

### SmsCaptchaInput

- 💚 修复应用状态切换时倒计时可能不准的 bug

### ImgHolder

- 💚 新增属性 `autoRemoveHolder`：图片加载完成是否移除 holder

## 0.17.1

### Overlay

- 💚 新增属性 `useAnimation`：是否使用动画

### Dialog

- 💚 新增属性 `useOverlayAnimation`：是否使用 Overlay 动画

### Loading

- 💚 新增属性 `useOverlayAnimation`：是否使用 Overlay 动画

### ToolTip

- 💚 新增属性 `useOverlayAnimation`：是否使用 Overlay 动画

## 0.17.0

### CardView

- 💚 现在自带鱼眼效果
- 💛 修改方法 `scrollToCard`：更名为 `scrollTo`，并接受第二个参数，标示是否使用动画
- 💚 新增属性 `scaleCoefficient`：当前项放大比率

### Btn

- 💚 新增属性 `hitSlop`：按钮热区

## NumericKeyboard

- 💚 新增属性 `style`：自定义样式

## 0.16.0

- 💛 原 `Alert` 组件更名为 `Dialog`
- 💚 新增警告弹框组件：`Alert`
- 💚 新增确认弹框组件：`Confirm`
- 💚 新增自动滚动的文本框组件：`DynamicText`

### CardView

- 💚 新增属性 `onPass`：卡片经过时的回调，参数为当前经过的卡片序号
- 💚 新增属性 `onStartReached`：到达顶部回调
- 💚 新增属性 `onEndReached`：到达底部回调

### Overlay

- 💚 添加属性 `pointerEvents`：允许遮罩层不作为触控事件目标

### ToolTip

- 💚 添加属性 `pointerEvents`：允许遮罩层不作为触控事件目标

## 0.15.2

### CardView

- 💚 优化 CardView 滚动效果：不再是一次只能移动一个了

## 0.15.1

### CardView

- 💚 修复在 iPhone 6s 以上苹果手机内部元素点击失效的 bug

## 0.15.0

- 💚 新增卡片视图组件：`CardView`

### Overlay

- 💛 删除属性 `pointerEvents`

### ToolTip

- 💛 删除属性 `pointerEvents`
- 💚 修改样式：文字黑色背景默认有 5dp 的圆角

## 0.14.0

### All

- 💚 修改属性 `statusBarBgColor`：默认值改为 `transparent`

## 0.13.1

### PhoneNumInput

- 💚 修改属性 `onChangeText`：新增第二个参数，传入 `name` 属性值

### SmsCaptchaInput

- 💚 修改属性 `onChangeText`：新增第二个参数，传入 `name` 属性值

## 0.13.0

- 💚 新增页面容器组件：`All`
- 💚 新增页面容器组件：`ImgRollView`

### KeyboardAdaptiveView

- 💛 兼容至 react-native `0.41.2`

## 0.12.0

### HeaderedSheet

- 💛 左右按钮可点击区域贴边

## 0.11.9

- 💚 新增有占位元素的文本显示组件：`PlaceholderText`

### PlaceholderInput

- 💚 样式兼容安卓

## 0.11.7

- 💚 新增上拉按钮组组件：`ActionSheet`
- 💚 新增图片选择组件：`ImgPicker`

### PlaceholderInput

- 💚 修正更改 `defaultValue` 不会触发 `placeholder` 显隐的 bug

## 0.11.6

- 💚 新增可以自定义占位元素的输入框组件：`PlaceholderInput`

### NavBar

- 💚 新增属性 `leftBtnDisabled`：左侧按钮禁用
- 💚 新增属性 `rightBtnDisabled`：右侧按钮禁用

## 0.11.4

### Badge

- 💚 新增属性 `characterWidth`：单个字符宽度

## 0.0.1

❤️ Hello RNX UI.
