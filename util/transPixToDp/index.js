/**
 * pix 转 dp
 */
import { PixelRatio } from 'react-native';

const dpi = PixelRatio.get();

/**
 * pix 转 dp
 * @param  {Number} pix
 * @return {Number} dp
 */
function transPixToDp(pix) {
  return pix / dpi;
}

export default transPixToDp;
