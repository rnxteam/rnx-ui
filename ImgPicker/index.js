import React, {
  Component,
} from 'react';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

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
  // 图片 uri 数组
  images: PropTypes.arrayOf(PropTypes.string),
  // ImgDisplayer 属性
  imgDisplayerProps: PropTypes.shape(ImgDisplayer.propTypes),
  // 自定义样式
  style: View.propTypes.style,
  // 每项自定义样式
  itemStyle: View.propTypes.style,
  // 添加按钮自定义样式
  adderBtnStyle: View.propTypes.style,
  // 添加按钮点击回调
  onAdderPress: PropTypes.func,
  // 添加按钮内容元素
  adder: PropTypes.element,
  // 是否显示添加按钮
  adderVisible: PropTypes.bool,
  // 添加按钮点击颜色反馈
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
