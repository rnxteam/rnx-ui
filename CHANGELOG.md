# CHANGELOG

## 0.11.4

### Badge

- 新增属性 `characterWidth`：单个字符宽度

## 0.11.3

### Drop

#### Receiver

- 修正当元素已经 unmount 了仍可动画的 bug

## 0.11.2

### SmsCaptchaInput

- 新增属性 `hitSlop`：发送短信按钮热区

## 0.11.0

- 新增警告弹框组件：Alert

## 0.10.5

### AddAndSubtract

- 修正 android 系统下数字可能不显示的 bug

## 0.10.4

### KeyboardAdaptiveView

- 新增属性 `minKbdHeight`：最小键盘高度
- 新增属性 `handlerAndroid`：安卓系统是否处理

## 0.10.3

### AddAndSubtract

- 新增属性 `adderBtnStyle`：加法按钮样式
- 新增属性 `subtracterWrapperStyle`：减法按钮容器样式
- 新增属性 `subtracterBtnStyle`：减法按钮样式

## 0.10.2

### SmsCaptchaInput

- 新增属性 `autoFocus`：是否开启自动获取焦点（在 start 被调用时）
- 新增属性 `getInput`：获取输入框

## 0.10.1

### AddAndSubtract

- 修改属性 `duration`：默认值改为 `200`
- 修改属性 `easing`：默认值改为匀速动画

## 0.10.0

- 新增加减法动画组件：AddAndSubtract

## 0.9.2

### Drop

#### Receiver

- 修改属性 `ref`：更名为 `getEl`
- `getCenterPosition` 方法兼容 RN 0.33 版本

## 0.9.1

### NumericKeyboard

- 新增属性 `deleteKeyContent`：删除键内容

## 0.9.0

- 新增虚拟密码输入框组件：VirtualPasswordInput
- 新增虚拟数字键盘组件：NumericKeyboard

## 0.8.2

### SmsCaptchaInput

- 优化倒计时逻辑
- iOS 设备中在倒计时阶段，如果应用进入后台，倒计时不再中断

### KeyboardAdaptiveView

- 改进使用方式，更加智能地适应键盘
- 新增属性 `getEl`：获取元素回调
- 新增属性 `moreDistance`：更多距离。iOS 系统键盘可能会出现 suggest 行，导致键盘高度获取不准确

### Validator

- `collect` 方法不再需要 `bind` 到 Validator 实例上

## 0.8.1

### KeyboardAdaptiveView

- 新增导出常量 `keyboardDismissMode`

## 0.8.0

- 新增适应键盘的容器组件：KeyboardAdaptiveView

## 0.7.3

### ImgHolder

- 新增属性 `imgStyle`：图片样式

## 0.7.2

### Badge

- 不再使用纯函数构建组件

### Drop

#### Dropper

- 新增动画阶段：开始阶段有透明向不透明渐变
- 新增属性 `showDuration`：动画刚开始由透明变化至不透明的时间

#### Receiver

- 新增属性 `onLayout`：布局回调
- 修正 `getCenterPosition` 获取位置不准确的 bug

### ImgHolder

- 修正图片大小可能不正确的 bug

## 0.7.0

- 新增掉落动画组件：Drop

### PhoneNumInput

- 限制输入长度为 11

## 0.6.7

### Overlay

- 修正 `visible` 初始值为 `true` 时不显示的 bug
- 新增属性 `duration`：动画时长

### Sheet

- 修正 `visible` 初始值为 `true` 时不显示的 bug

## 0.6.6

### HeaderedSheet

- 扩大左右按钮点击区域高度，现在等同于 header 高度

### Overlay

- 修复关闭 Overlay 后立刻再次打开 Overlay，Overlay 不再显示的 bug

## 0.6.5

### PhoneNumInput

- 占位文字默认颜色改为 `#999`

### SmsCaptchaInput

- 占位文字默认颜色改为 `#999`
- 按钮文字不再设置默认颜色，即现在为黑色

## 0.6.3

### NavBar

- 扩大左右按钮点击区域高度，现在等同于 header 高度

## 0.6.2

### TabBar

- 简化逻辑，现在 TabBar 自身不维持激活项状态，需要通过属性 `activeId` 来定义
- 新增属性 `activeId`：激活项的 Id，必须是 `items` 项的 `id` 属性
- 修改属性 `onChange`：更名为 `onPress`

## 0.6.1

### Overlay

- 新增属性 `pointerEvents`：控制 Overlay 是否可以作为触控事件的目标

### ToolTip

- 新增属性 `pointerEvents`：控制 Overlay 是否可以作为触控事件的目标

## 0.6.0

- 新增带占位的图片组件：ImgHolder

## 0.5.4

### SmsCaptchaInput

- 新增属性 `btnTextInital`：按钮文字：初始状态
- 新增属性 `btnTextSending`：按钮文字：发送短信中
- 新增属性 `btnTextTiming`：按钮文字：倒计时中，`{time}` 将会被替换为倒计时数字
- 新增属性 `btnTextTimed`：按钮文字：倒计时结束
- 新增属性 `onStop`：倒计时结束回调
- 修改属性 `buttonStyle`：更名为 `btnStyle`
- 修改属性 `buttonTextStyle`：更名为 `btnTextStyle`
- 修改属性 `onPressSendMsgBtn`：更名为 `onPressBtn`，并且接受两个参数：进入倒计时状态的方法 `start` 和进入到倒计时结束状态的方法 `stop`
- 修改属性 `codeLength`：更名为 `captchaLength`，并且会限制键盘允许输入最大长度

## 0.5.2

### HeaderedSheet

- 修改属性 `modalStyle`：更名为 `overlayStyle`
- 修改属性 `onPressModal`：更名为 `onPressOverlay`

### Loading

- 修改属性 `modalStyle`：更名为 `overlayStyle`

### Overlay

- Overlay 内部不再依赖 Modal 组件

### Sheet

- 修改属性 `modalStyle`：更名为 `overlayStyle`
- 修改属性 `onPressModal`：更名为 `onPressOverlay`

### ToolTip

- 修改属性 `modalStyle`：更名为 `overlayStyle`

## 0.5.1

### Badge

- 新增属性 `textStyle`：自定义文本样式
- 修改属性 `numberStyle`：更名为 `textContainerStyle`
- 修改属性 `text`：现在可以为字符串或数字类型

## 0.5.0

- 新增菊花加载组件：Loading
- 修正 Sheet 关闭时触发两次动画的 bug

## 0.4.2

- Btn 默认高度由 40 调整为 45
- HeaderedSheet 的标题栏的默认高度由 40 调整为 45

## 0.4.1

### HeaderedSheet

- 修改属性 `leftEvent`：更名为 `onPressLeftBtn`
- 修改属性 `rightEvent`：更名为 `onPressRightBtn`
- 点击底部内容区域不再会触发 `onPressModal`

## 0.4.0

- 添加组件开发模板：Template
- 新增遮罩层组件：Overlay
- 新增底部弹层组件：Sheet
- 新增有标题栏的底部弹层组件：HeaderedSheet

### NavBar

- 修改属性 `leftBtn`：现在可以为字符串或元素类型
- 修改属性 `rightBtn`：现在可以为字符串或元素类型
- 新增属性 `leftBtnStyle`：左侧按钮文本样式（leftBtn 为字符串时才生效）
- 新增属性 `rightBtnStyle`：左侧按钮文本样式（rightBtn 为字符串时才生效）

### ToolTip

- 内部改用 Overlay 组件

## 0.3.1

### RefreshView

- 新增属性 `onScroll`：滚动回调
- 新增属性 `onEndReachedThreshold`：到达底部阀值
- 新增属性 `onEndReached`：到达底部回调
- 修正进入顶部和底部超范围减速时闪烁的 bug

## 0.3.0

- 新增滚动框组件：RefreshView
- PhoneNumInput 和 SmsCaptchaInput 默认背景色由白色改为透明

## 0.2.1

- 修正 transPxToDp 的说明

## 0.2.0

- 新增提示框组件：ToolTip
- PhoneNumInput 和 SmsCaptchaInput 去除默认水平 padding

## 0.1.0

- 新增手机号码输入框组件：PhoneNumInput
- 新增短信验证码输入框组件：SmsCaptchaInput
- 新增表单校验工具：Validator

## 0.0.8

- transPixToDp 更名为 transPxToDp

## 0.0.6

- TabBar 的 `onChange` 回调可以有返回值。当返回值为 `false` 时，可以阻止当前切换操作

## 0.0.5

- 新增角标组件：Badge
- 新增按钮组件：Btn
- 新增虚拟像素（dp）转像素（px）方法：transPixToDp

## 0.0.4

- 新增 NavBar 组件

## 0.0.3

- 去除多余文件

## 0.0.2

- 新增 TabBar 组件

## 0.0.1

- 初始化
