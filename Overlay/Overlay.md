#### Demo

![Overlay](http://wx2.sinaimg.cn/mw690/4c8b519dly1fdlfglw0mfg20hs0wsn3p.gif)

### ⚠️ 注意

1. 点击 Overlay 内部元素时也会触发 Overlay 的 `onPress` 回调。如果需要避免该情况，请在内部元素外包裹 `Touchable*` 元素，用来捕获点击事件并阻止其冒泡。

1. Overlay 默认撑满父容器，且父容器需要设置样式属性 `position` 为 `'absolute'` 或 `'relative'`。

1. Overlay 不会阻止安卓物理返回键。

