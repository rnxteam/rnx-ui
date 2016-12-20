# transPxToDp

虚拟像素（dp）转像素（px）方法

## Example

```js
/**
 * pix 转 dp
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
