# rnx-ui

[![npm](https://img.shields.io/npm/v/rnx-ui.svg?maxAge=60)](https://www.npmjs.com/package/rnx-ui)
[![npm](https://img.shields.io/npm/dt/rnx-ui.svg?maxAge=60)](https://www.npmjs.com/package/rnx-ui)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/dragonwong/rnx-ui/master/LICENSE)

A UI Lib for React Native

## Start

### 1. Install

```js
npm install 'rnx-ui' --save
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

### Component

Name       | Description | State
---------- | ----------- | -----
[ActionSheet](https://github.com/dragonwong/rnx-ui/tree/master/ActionSheet)     | 上拉菜单 | ![](https://img.shields.io/badge/state-developing-brightgreen.svg)
[Badge](https://github.com/dragonwong/rnx-ui/tree/master/Badge)      | 角标 | ![](https://img.shields.io/badge/state-done-blue.svg)
[Btn](https://github.com/dragonwong/rnx-ui/tree/master/Btn)        | 按钮 | ![](https://img.shields.io/badge/state-done-blue.svg)
[CellInput](https://github.com/dragonwong/rnx-ui/tree/master/Checkbox)  | 格子输入框（通常用于固定长度的密码输入） | ![](https://img.shields.io/badge/state-designing-orange.svg)
[Checkbox](https://github.com/dragonwong/rnx-ui/tree/master/Checkbox)  | 选择框 | ![](https://img.shields.io/badge/state-designing-orange.svg)
[HeaderedSheet](https://github.com/dragonwong/rnx-ui/tree/master/HeaderedSheet)        | 有标题栏的底部弹层 | ![](https://img.shields.io/badge/state-done-blue.svg)
[Icon](https://github.com/dragonwong/rnx-ui/tree/master/Icon)  | 字体图标 | ![](https://img.shields.io/badge/state-designing-orange.svg)
[LoadingBtn](https://github.com/dragonwong/rnx-ui/tree/master/LoadingBtn) | 带菊花图的按钮 | ![](https://img.shields.io/badge/state-designing-orange.svg)
[NavBar](https://github.com/dragonwong/rnx-ui/tree/master/NavBar)     | 导航栏 | ![](https://img.shields.io/badge/state-done-blue.svg)
[Number](https://github.com/dragonwong/rnx-ui/tree/master/Number)     | 数字 | ![](https://img.shields.io/badge/state-developing-brightgreen.svg)
[NumberKeyboard](https://github.com/dragonwong/rnx-ui/tree/master/Checkbox)  | 数字键盘 | ![](https://img.shields.io/badge/state-designing-orange.svg)
[Overlay](https://github.com/dragonwong/rnx-ui/tree/master/Overlay)     | 遮罩层 | ![](https://img.shields.io/badge/state-done-blue.svg)
[PswdInput](https://github.com/dragonwong/rnx-ui/tree/master/Checkbox)  | 密码输入框（带有用于切换密码显隐的“眼睛”按钮） | ![](https://img.shields.io/badge/state-designing-orange.svg)
[PhoneNumInput](https://github.com/dragonwong/rnx-ui/tree/master/PhoneNumInput)     | 手机号码输入框 | ![](https://img.shields.io/badge/state-done-blue.svg)
[RefreshView](https://github.com/dragonwong/rnx-ui/tree/master/RefreshView)     | 滚动列表（带下拉刷新、上拉加载） | ![](https://img.shields.io/badge/state-done-blue.svg)
[Select](https://github.com/dragonwong/rnx-ui/tree/master/Select)  | 选择器（带有向上弹出和向下隐藏的动画、遮罩、取消确定标题栏） | ![](https://img.shields.io/badge/state-designing-orange.svg)
[Sheet](https://github.com/dragonwong/rnx-ui/tree/master/Sheet)     | 底部弹层 | ![](https://img.shields.io/badge/state-done-blue.svg)
[SlideMenu](https://github.com/dragonwong/rnx-ui/tree/master/SlideMenu)  | 侧滑菜单 | ![](https://img.shields.io/badge/state-designing-orange.svg)
[SmsCaptchaInput](https://github.com/dragonwong/rnx-ui/tree/master/SmsCaptchaInput)        | 短信验证码输入框 | ![](https://img.shields.io/badge/state-done-blue.svg)
[TabBar](https://github.com/dragonwong/rnx-ui/tree/master/TabBar)     | 横向点击栏 | ![](https://img.shields.io/badge/state-done-blue.svg)
[ToolTip](https://github.com/dragonwong/rnx-ui/tree/master/ToolTip)     | 提示框 | ![](https://img.shields.io/badge/state-done-blue.svg)
[Web](https://github.com/dragonwong/rnx-ui/tree/master/Web)  | 类微信浏览器 | ![](https://img.shields.io/badge/state-designing-orange.svg)

### Util

Name       | Description | State
---------- | ----------- | -----
[transPxToDp](https://github.com/dragonwong/rnx-ui/tree/master/util/transPxToDp)      | 像素（px）转虚拟像素（dp）方法 | ![](https://img.shields.io/badge/state-done-blue.svg)
[Validator](https://github.com/dragonwong/rnx-ui/tree/master/util/Validator)      | 表单校验工具 | ![](https://img.shields.io/badge/state-done-blue.svg)

## Todo

- Overlay 提供非 Modal 版本
- demo 图片缩小
- Badge 添加小圆点样式
- PhoneNumInput 安卓键盘测试

### Bug

- Sheet 组件：`visible` 初始状态为 true 时只有遮罩
