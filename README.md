# rnx-ui

[![Build Status](https://travis-ci.org/rnxteam/rnx-ui.svg?branch=master)](https://travis-ci.org/rnxteam/rnx-ui)
[![npm](https://img.shields.io/npm/v/rnx-ui.svg?maxAge=60)](https://www.npmjs.com/package/rnx-ui)
[![npm](https://img.shields.io/npm/dt/rnx-ui.svg?maxAge=60)](https://www.npmjs.com/package/rnx-ui)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/rnxteam/rnx-ui/master/LICENSE)

A UI Lib for React Native

## Start

### 1. Install

```
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

`🖌` designing(8) `🛠` developing(1) `✅` done(25)

### Component

Name       | Description | State
---------- | ----------- | -----
[ActionSheet](https://github.com/rnxteam/rnx-ui/tree/master/ActionSheet)     | 上拉按钮组 | ✅
[AddAndSubtract](https://github.com/rnxteam/rnx-ui/tree/master/AddAndSubtract)      | 加减法动画组件 | ✅
[Alert](https://github.com/rnxteam/rnx-ui/tree/master/Alert)      | 警告弹框 | ✅
[All](https://github.com/rnxteam/rnx-ui/tree/master/All)      | 页面容器 | ✅
[Badge](https://github.com/rnxteam/rnx-ui/tree/master/Badge)      | 角标 | ✅
[Btn](https://github.com/rnxteam/rnx-ui/tree/master/Btn)        | 按钮 | ✅
[Checkbox](https://github.com/rnxteam/rnx-ui/tree/master/Checkbox)  | 选择框 | 🖌
[Confirm](https://github.com/rnxteam/rnx-ui/tree/master/Confirm)  | 确认弹框 | 🖌
[Drop](https://github.com/rnxteam/rnx-ui/tree/master/Drop)        | 掉落动画组件 | ✅
[HeaderedSheet](https://github.com/rnxteam/rnx-ui/tree/master/HeaderedSheet)        | 有标题栏的底部弹层 | ✅
[Icon](https://github.com/rnxteam/rnx-ui/tree/master/Icon)  | 字体图标 | 🖌
[ImgHolder](https://github.com/rnxteam/rnx-ui/tree/master/ImgHolder)  | 带占位的图片 | ✅
[ImgPicker](https://github.com/rnxteam/rnx-ui/tree/master/ImgPicker)  | 图片选择组件 | ✅
[ImgRollView](https://github.com/rnxteam/rnx-ui/tree/master/ImgRollView)  | 图片选择组件 | ✅
[KeyboardAdaptiveView](https://github.com/rnxteam/rnx-ui/tree/master/KeyboardAdaptiveView)        | 适应键盘的容器 | ✅
[Loading](https://github.com/rnxteam/rnx-ui/tree/master/Loading) | 菊花加载中动画 | ✅
[LoadingBtn](https://github.com/rnxteam/rnx-ui/tree/master/LoadingBtn) | 带菊花图的按钮 | 🖌
[NavBar](https://github.com/rnxteam/rnx-ui/tree/master/NavBar)     | 导航栏 | ✅
[Number](https://github.com/rnxteam/rnx-ui/tree/master/Number)     | 数字 | 🛠
[NumericKeyboard](https://github.com/rnxteam/rnx-ui/tree/master/NumericKeyboard)  | 虚拟数字键盘 | ✅
[Overlay](https://github.com/rnxteam/rnx-ui/tree/master/Overlay)     | 遮罩层 | ✅
[PlaceholderText](https://github.com/rnxteam/rnx-ui/tree/master/PlaceholderText)     | 有占位元素的文本显示组件 | ✅
[PlaceholderInput](https://github.com/rnxteam/rnx-ui/tree/master/PlaceholderInput)     | 可以自定义占位元素的输入框 | ✅
[PswdInput](https://github.com/rnxteam/rnx-ui/tree/master/Checkbox)  | 密码输入框（带有用于切换密码显隐的“眼睛”按钮） | 🖌
[PhoneNumInput](https://github.com/rnxteam/rnx-ui/tree/master/PhoneNumInput)     | 手机号码输入框 | ✅
[RefreshView](https://github.com/rnxteam/rnx-ui/tree/master/RefreshView)     | 滚动列表（带下拉刷新、上拉加载） | ✅
[Select](https://github.com/rnxteam/rnx-ui/tree/master/Select)  | 选择器（带有向上弹出和向下隐藏的动画、遮罩、取消确定标题栏） | 🖌
[Sheet](https://github.com/rnxteam/rnx-ui/tree/master/Sheet)     | 底部弹层 | ✅
[SlideMenu](https://github.com/rnxteam/rnx-ui/tree/master/SlideMenu)  | 侧滑菜单 | 🖌
[SmsCaptchaInput](https://github.com/rnxteam/rnx-ui/tree/master/SmsCaptchaInput)        | 短信验证码输入框 | ✅
[TabBar](https://github.com/rnxteam/rnx-ui/tree/master/TabBar)     | 横向点击栏 | ✅
[ToolTip](https://github.com/rnxteam/rnx-ui/tree/master/ToolTip)     | 提示框 | ✅
[VirtualPasswordInput](https://github.com/rnxteam/rnx-ui/tree/master/VirtualPasswordInput)  | 虚拟密码输入框 | ✅
[Web](https://github.com/rnxteam/rnx-ui/tree/master/Web)  | 类微信浏览器 | 🖌

### Util

Name       | Description | State
---------- | ----------- | -----
[transPxToDp](https://github.com/rnxteam/rnx-ui/tree/master/util/transPxToDp)      | 像素（px）转虚拟像素（dp）方法 | ✅
[Validator](https://github.com/rnxteam/rnx-ui/tree/master/util/Validator)      | 表单校验工具 | ✅

## Example

将项目克隆至本地后：

### 1. Install

```
npm install
```

### 2. Run

```
react-native run-ios
```
