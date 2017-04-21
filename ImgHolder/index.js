/**
 * @component ImgHolder
 * @version 0.17.0
 * @description 带占位的图片组件
 *
 * @instructions {instruInfo: ./ImgHolder/ImgHolder.md}
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  all: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  img: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: null,
    width: null,
  },
});

class ImgHolder extends Component {
  render() {
    return (
      <View style={[styles.all, this.props.style]}>
        {
          this.props.holder
        }
        <Image
          source={this.props.source}
          style={[styles.img, this.props.imgStyle]}
        />
      </View>
    );
  }
}

ImgHolder.propTypes = {
  /**
   * @property style
   * @type Object
   * @default null
   * @description 自定义样式
   */
  style: View.propTypes.style,
  /**
   * @property imgStyle
   * @type Object
   * @default null
   * @description 图片样式
   */
  imgStyle: Image.propTypes.style,
  /**
   * @property holder
   * @type Element Array
   * @default null
   * @description 占位元素
   */
  holder: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  /**
   * @property source
   * @type Object Number
   * @default {
   *      uri: ''
   *  },
   * @description 图片资源
   */
  source: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired,
};
ImgHolder.defaultProps = {
  style: null,
  imgStyle: null,
  holder: null,
  source: {
    uri: '',
  },
};

export default ImgHolder;
