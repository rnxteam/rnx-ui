/**
 * @component ImgPicker
 * @version 0.11.7
 * @description 图片选择组件
 *
 * @instructions {instruInfo: ./ImgPicker/ImgPicker.md}
 */
import React, {
  Component,
  PropTypes,
} from 'react';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

import ImgDisplayer from './ImgDisplayer';
import styles from './styles';

const NOOP = () => {};

class ImgPicker extends Component {
  render() {
    return (
      <View style={[styles.all, this.props.style]}>
        {
          this.props.images.map((item, index) => (
            <ImgDisplayer
              {...this.props.imgDisplayerProps}
              uri={item}
              key={index}
              index={index}
              style={[styles.item, this.props.itemStyle]}
            />
          ))
        }
        {
          this.props.adderVisible ? (
            <TouchableHighlight
              underlayColor={this.props.deleterUnderlayColor}
              style={[styles.item, styles.adderBtn, this.props.itemStyle, this.props.adderBtnStyle]}
              onPress={this.props.onAdderPress}
            >
              <View style={styles.adderContainer}>
                {this.props.adder}
              </View>
            </TouchableHighlight>
          ) : null
        }
      </View>
    );
  }
}

ImgPicker.propTypes = {
  /**
   * @property images
   * @type Array
   * @default []
   * @description 图片 uri
   */
  images: PropTypes.arrayOf(PropTypes.string),
  /**
   * @property ImgDisplayerProps
   * @type Object
   * @default ImgDisplayer.defaultProps
   * @description ImgDisplayer 属性
   */
  imgDisplayerProps: PropTypes.shape(ImgDisplayer.propTypes),
  /**
   * @property style
   * @type Object
   * @default null
   * @description 自定义样式
   */
  style: View.propTypes.style,
  /**
   * @property itemStyle
   * @type Object
   * @default null
   * @description 每项自定义样式
   */
  itemStyle: View.propTypes.style,
  /**
   * @property adderBtnStyle
   * @type Object
   * @default null
   * @description 添加按钮自定义样式
   */
  adderBtnStyle: View.propTypes.style,
  /**
   * @property onAdderPress
   * @type Function
   * @default NOOP
   * @description 添加按钮点击回调
   */
  onAdderPress: PropTypes.func,
  /**
   * @property adder
   * @type Element
   * @default <Text style={styles.adderText}>+</Text>
   * @description 添加按钮内容元素
   */
  adder: PropTypes.element,
  /**
   * @property adderVisible
   * @type Boolean
   * @default true
   * @description 是否显示添加按钮
   */
  adderVisible: PropTypes.bool,
   /**
   * @property deleterUnderlayColor
   * @type Function
   * @default NOOP
   * @description 添加按钮点击颜色反馈
   */
  deleterUnderlayColor: PropTypes.string,
};
ImgPicker.defaultProps = {
  images: [],
  imgDisplayerProps: ImgDisplayer.defaultProps,
  style: null,
  itemStyle: null,
  adderBtnStyle: null,
  onAdderPress: NOOP,
  adder: <Text style={styles.adderText}>+</Text>,
  adderVisible: true,
  deleterUnderlayColor: '#dfdfdf',
};

export default ImgPicker;
