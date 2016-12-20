# transPxToDp

虚拟像素（dp）转像素（px）方法

React Native 的长度单位为 dp，意思是虚拟像素，不是真实的物理像素，(1 dp 在不同像素比的设备上会等于不同 px，比如 iPhone 456 是 2，iPhone 6s 是 3)，所以在 rn 代码里写一个宽度为 1 的边框，在 iPhone 5 上看上去会有 2 像素宽，在 iPhone 6s 上看上去会有 3 像素宽。

`transPxToDp` 就是为了解决这个问题。使用了 `transPxToDp` 之后，设置 1 的宽度，在 iPhone 5 实际设置为 0.5，在 iPhone 6s 实际设置为 0.33。

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
