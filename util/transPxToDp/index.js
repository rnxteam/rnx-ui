/**
 * px 转 dp
 * 注意：
 * 在安卓设备下，如果 lineHeight 是浮点数会红屏，需要再取整下
 */
import { PixelRatio } from 'react-native';

const dpi = PixelRatio.get();

/**
 * pix 转 dp
 * @param  {Number} px
 * @return {Number} dp
 */
function transPxToDp(px) {
  return px / dpi;
}

export default transPxToDp;
