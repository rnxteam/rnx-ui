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

### 组件

Name       | Description | State
---------- | ----------- | -----
[Badge](https://github.com/dragonwong/rnx-ui/tree/master/Badge)      | 角标 | ![](https://img.shields.io/badge/state-done-blue.svg)
[Btn](https://github.com/dragonwong/rnx-ui/tree/master/Btn)        | 按钮 | ![](https://img.shields.io/badge/state-done-blue.svg)
[LoadingBtn](https://github.com/dragonwong/rnx-ui/tree/master/LoadingBtn) | 带菊花图的按钮 | ![](https://img.shields.io/badge/state-designing-orange.svg)
[NavBar](https://github.com/dragonwong/rnx-ui/tree/master/NavBar)     | 导航栏 | ![](https://img.shields.io/badge/state-done-blue.svg)
[Number](https://github.com/dragonwong/rnx-ui/tree/master/Number)     | 数字 | ![](https://img.shields.io/badge/state-developing-brightgreen.svg)
[SlideMenu](https://github.com/dragonwong/rnx-ui/tree/master/SlideMenu)  | 侧滑菜单 | ![](https://img.shields.io/badge/state-designing-orange.svg)
[TabBar](https://github.com/dragonwong/rnx-ui/tree/master/TabBar)     | 横向点击栏 | ![](https://img.shields.io/badge/state-done-blue.svg)

### 工具

Name       | Description | State
---------- | ----------- | -----
[transPixToDp](https://github.com/dragonwong/rnx-ui/tree/master/util/transPixToDp)      | 虚拟像素（dp）转像素（px）方法 | ![](https://img.shields.io/badge/state-done-blue.svg)
