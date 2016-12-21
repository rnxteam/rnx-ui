# rnx-ui

[![npm](https://img.shields.io/npm/v/rnx-ui.svg?maxAge=2592000)](https://www.npmjs.com/package/rnx-ui)
[![npm](https://img.shields.io/npm/dt/rnx-ui.svg?maxAge=2592000)](https://www.npmjs.com/package/rnx-ui)
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
import SlideMenu from 'rnx-ui/SlideMenu';

function Demo(props) {
  return <SlideMenu />;
}
```

## Overview

### Component

Name       | Description | State
---------- | ----------- | -----
[Badge](https://github.com/dragonwong/rnx-ui/tree/master/Badge)      | 角标 | ![](https://img.shields.io/badge/state-done-blue.svg)
[Btn](https://github.com/dragonwong/rnx-ui/tree/master/Btn)        | 按钮 | ![](https://img.shields.io/badge/state-done-blue.svg)
[LoadingBtn](https://github.com/dragonwong/rnx-ui/tree/master/LoadingBtn) | 带菊花图的按钮 | ![](https://img.shields.io/badge/state-designing-orange.svg)
[NavBar](https://github.com/dragonwong/rnx-ui/tree/master/NavBar)     | 导航栏 | ![](https://img.shields.io/badge/state-done-blue.svg)
[Number](https://github.com/dragonwong/rnx-ui/tree/master/Number)     | 数字 | ![](https://img.shields.io/badge/state-developing-brightgreen.svg)
[PhoneNumInput](https://github.com/dragonwong/rnx-ui/tree/master/PhoneNumInput)     | 手机号码输入框 | ![](https://img.shields.io/badge/state-done-blue.svg)
[RefreshView](https://github.com/dragonwong/rnx-ui/tree/master/RefreshView)     | 滚动列表（带下拉刷新、上拉加载） | ![](https://img.shields.io/badge/state-developing-brightgreen.svg)
[Select](https://github.com/dragonwong/rnx-ui/tree/master/Select)  | 选择器（带有向上弹出和向下隐藏的动画、遮罩、取消确定标题栏） | ![](https://img.shields.io/badge/state-designing-orange.svg)
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

- Badge 添加小圆点样式
- PhoneNumInput 安卓键盘测试
