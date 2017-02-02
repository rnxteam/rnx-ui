# transPxToDp

像素（px）转虚拟像素（dp）方法

![](demo.png)

React Native 的长度单位为 dp，意思是独立像素，不是真实的物理像素，1dp 在不同 PixelRatio（像素比）的设备上会等于不同 px，比如 iPhone 456 是 2px，iPhone 6s 是 3px，所以在 rn 代码里写一个宽度为 1 的边框，在 iPhone 5 上看上去会有 2 像素宽，在 iPhone 6s 上看上去会有 3 像素宽。

> dp 即 device-independent pixels，或 dip，表示设备独立像素；PixelRatio 则描述物理像素和独立像素的比值，即 PixelRatio = 物理像素 / dp。

`transPxToDp` 就是为了解决这个问题。使用了 `transPxToDp` 之后，设置 1 的宽度，在 iPhone 5 实际设置为 0.5，在 iPhone 6s 实际设置为 0.33。

### ⚠️ 注意

1. 在安卓设备下，如果 `lineHeight` 是小数会红屏，需要再取整下。

2. 如果想实现视觉效果较好的最细宽度，推荐使用 `Stylesheet.hairlineWidth
`，但如果就是要实现纯粹的最细宽度，那就用 `transPxToDp(1)` 吧。

> 在屏幕像素比（PixelRatio）为 3.75 以下设备，`hairlineWidth` 和 `transPxToDp(1)` 是一样的，在 3.75 及以上设备，`hairlineWidth` 是 `transPxToDp(1)` 的两倍或两倍以上。

## Example

```js
/**
 * px 转 dp
 * @param  {Number} px
 * @return {Number} dp
 */

import transPxToDp from 'rnx-ui/util/transPxToDp';

// 设置一个宽度为 1 像素的顶部边框
const styles = StyleSheet.create({
  foo: {
    borderTopWidth: transPxToDp(1),
  },
});
```
