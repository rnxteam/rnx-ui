/**
 * pix 转 dp
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
