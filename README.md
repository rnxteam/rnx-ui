# rnx-ui

[![Build Status](https://travis-ci.org/dragonwong/rnx-ui.svg?branch=master)](https://travis-ci.org/dragonwong/rnx-ui)
[![npm](https://img.shields.io/npm/v/rnx-ui.svg?maxAge=60)](https://www.npmjs.com/package/rnx-ui)
[![npm](https://img.shields.io/npm/dt/rnx-ui.svg?maxAge=60)](https://www.npmjs.com/package/rnx-ui)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/dragonwong/rnx-ui/master/LICENSE)

A UI Lib for React Native

## Start

### 1. Install

```js
npm install rnx-ui --save
```

### 2. Use

```js
import React, {
  Component,
} from 'react';
import Btn from 'rnx-ui/Btn';

function Demo(props) {
  return <Btn />;
}
```

## Overview

`🖌` designing(7) `🛠` developing(1) `✅` done(24)

### Component

Name       | Description | State
---------- | ----------- | -----
[ActionSheet](https://github.com/dragonwong/rnx-ui/tree/master/ActionSheet)     | 上拉按钮组 | ✅
[AddAndSubtract](https://github.com/dragonwong/rnx-ui/tree/master/AddAndSubtract)      | 加减法动画组件 | ✅
[Alert](https://github.com/dragonwong/rnx-ui/tree/master/Alert)      | 警告弹框 | ✅
[Badge](https://github.com/dragonwong/rnx-ui/tree/master/Badge)      | 角标 | ✅
[Btn](https://github.com/dragonwong/rnx-ui/tree/master/Btn)        | 按钮 | ✅
[Checkbox](https://github.com/dragonwong/rnx-ui/tree/master/Checkbox)  | 选择框 | 🖌
[Drop](https://github.com/dragonwong/rnx-ui/tree/master/Drop)        | 掉落动画组件 | ✅
[HeaderedSheet](https://github.com/dragonwong/rnx-ui/tree/master/HeaderedSheet)        | 有标题栏的底部弹层 | ✅
[Icon](https://github.com/dragonwong/rnx-ui/tree/master/Icon)  | 字体图标 | 🖌
[ImgHolder](https://github.com/dragonwong/rnx-ui/tree/master/ImgHolder)  | 带占位的图片 | ✅
[ImgPicker](https://github.com/dragonwong/rnx-ui/tree/master/ImgPicker)  | 图片选择组件 | ✅
[KeyboardAdaptiveView](https://github.com/dragonwong/rnx-ui/tree/master/KeyboardAdaptiveView)        | 适应键盘的容器 | ✅
[Loading](https://github.com/dragonwong/rnx-ui/tree/master/Loading) | 菊花加载中动画 | ✅
[LoadingBtn](https://github.com/dragonwong/rnx-ui/tree/master/LoadingBtn) | 带菊花图的按钮 | 🖌
[NavBar](https://github.com/dragonwong/rnx-ui/tree/master/NavBar)     | 导航栏 | ✅
[Number](https://github.com/dragonwong/rnx-ui/tree/master/Number)     | 数字 | 🛠
[NumericKeyboard](https://github.com/dragonwong/rnx-ui/tree/master/NumericKeyboard)  | 虚拟数字键盘 | ✅
[Overlay](https://github.com/dragonwong/rnx-ui/tree/master/Overlay)     | 遮罩层 | ✅
[PlaceholderInput](https://github.com/dragonwong/rnx-ui/tree/master/PlaceholderInput)     | 可以自定义占位元素的输入框 | ✅
[PswdInput](https://github.com/dragonwong/rnx-ui/tree/master/Checkbox)  | 密码输入框（带有用于切换密码显隐的“眼睛”按钮） | 🖌
[PhoneNumInput](https://github.com/dragonwong/rnx-ui/tree/master/PhoneNumInput)     | 手机号码输入框 | ✅
[RefreshView](https://github.com/dragonwong/rnx-ui/tree/master/RefreshView)     | 滚动列表（带下拉刷新、上拉加载） | ✅
[Select](https://github.com/dragonwong/rnx-ui/tree/master/Select)  | 选择器（带有向上弹出和向下隐藏的动画、遮罩、取消确定标题栏） | 🖌
[Sheet](https://github.com/dragonwong/rnx-ui/tree/master/Sheet)     | 底部弹层 | ✅
[SlideMenu](https://github.com/dragonwong/rnx-ui/tree/master/SlideMenu)  | 侧滑菜单 | 🖌
[SmsCaptchaInput](https://github.com/dragonwong/rnx-ui/tree/master/SmsCaptchaInput)        | 短信验证码输入框 | ✅
[TabBar](https://github.com/dragonwong/rnx-ui/tree/master/TabBar)     | 横向点击栏 | ✅
[ToolTip](https://github.com/dragonwong/rnx-ui/tree/master/ToolTip)     | 提示框 | ✅
[VirtualPasswordInput](https://github.com/dragonwong/rnx-ui/tree/master/VirtualPasswordInput)  | 虚拟密码输入框 | ✅
[Web](https://github.com/dragonwong/rnx-ui/tree/master/Web)  | 类微信浏览器 | 🖌

### Util

Name       | Description | State
---------- | ----------- | -----
[transPxToDp](https://github.com/dragonwong/rnx-ui/tree/master/util/transPxToDp)      | 像素（px）转虚拟像素（dp）方法 | ✅
[Validator](https://github.com/dragonwong/rnx-ui/tree/master/util/Validator)      | 表单校验工具 | ✅

## Todo

- 修复多个 PlaceholderInput 切换输入时页面滚动错误的 bug
- ActionSheet 补充 demo 及图片
- ImgPicker 补充 demo 及图片
- PlaceholderInput 补充 demo 及图片
- 统一 `underlayColor`
- Validator demo 中把 PlaceholderInput 也加进去
- ImgHolder 图片加载完成移除底图
- 补全 Example
- 添加 test 执行脚本，检查 Example 下是否有对应示例
- demo 图片缩小，并迁移至微博图床
- Badge 添加小圆点样式
- 文字走马灯组件（用于 title）

### `*input` 系列组件

- 添加 `required` 属性
- 在 `onChangeText` 中将 `name` 的值作为第二个参数传入
- value 设置默认值为 `''`
