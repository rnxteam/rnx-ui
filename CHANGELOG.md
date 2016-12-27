# CHANGELOG

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
