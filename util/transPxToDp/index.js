/**
 * @component TransPxToDp
 * @version 0.17.0
 * @description 像素（px）转虚拟像素（dp）方法
 *
 * @instructions {instruInfo: ./util/transPxToDp/TransPxToDp.md}
 */
import { PixelRatio } from 'react-native';

const dpi = PixelRatio.get(); // 返回设备的像素密度

/**
 * @description pix 转 dp
 * @param  {Number} px
 * @return {Number} dp
 */
function transPxToDp(px) {
  return px / dpi;
}

export default transPxToDp;
