# CHANGELOG

## 0.5.3

### SmsCaptchaInput

- 新增方法 `start`：进入倒计时状态
- 新增方法 `stop`：进入倒计时结束状态
- 新增属性 `btnTextInital`：按钮文字：初始状态
- 新增属性 `btnTextSending`：按钮文字：发送短信中
- 新增属性 `btnTextTiming`：按钮文字：倒计时中，`{time}` 将会被替换为倒计时数字
- 新增属性 `btnTextTimed`：按钮文字：倒计时结束
- 新增属性 `onStop`：倒计时结束回调
- 修改属性 `buttonStyle`：更名为 `btnStyle`
- 修改属性 `buttonTextStyle`：更名为 `btnTextStyle`
- 修改属性 `onPressSendMsgBtn`：更名为 `onPressBtn`
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
