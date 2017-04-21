/**
 * @component ActionSheet
 * @version 0.11.7
 * @description 上拉按钮组
 *
 * @instructions {instruInfo: ./ActionSheet/ActionSheet.md}
 */
import React, { Component, PropTypes } from 'react';
import {
  Platform,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import Sheet from '../Sheet';

import styles from './styles';

const NOOP = () => {};
const isAndroid = Platform.OS === 'android';

class ActionSheet extends Component {
  render() {
    return (
      <Sheet
        visible={this.props.visible}
        overlayStyle={this.props.overlayStyle}
        onPressOverlay={this.props.onClose}
        onClose={this.props.onClose}
        duration={this.props.duration}
        style={[styles.containerStyle, this.props.style]}
      >
        <View style={styles.btnList}>
          {
            this.props.btnList.map((btn, index) => {
              // fix android
              const btnStyle = [styles.btn];
              if (isAndroid) {
                if (index === 0) {
                  btnStyle.push(styles.btnFirst);
                } else if (index === this.props.btnList.length - 1) {
                  btnStyle.push(styles.btnLast);
                }
              }

              btnStyle.push([this.props.btnStyle, btn.style]);

              return (
                <TouchableHighlight
                  key={index}
                  underlayColor={this.props.underlayColor}
                  style={btnStyle}
                  onPress={btn.onPress}
                >
                  <Text style={[styles.btnText, this.props.btnTextStyle, btn.style]}>
                    {btn.text}
                  </Text>
                </TouchableHighlight>
              );
            })
          }
        </View>
        <TouchableHighlight
          underlayColor={this.props.underlayColor}
          style={[styles.btn, styles.cancelBtn, this.props.btnStyle, this.props.cancelBtnStyle]}
          onPress={this.props.onClose}
        >
          <Text
            style={[
              styles.btnText,
              styles.cancelBtnText,
              this.props.btnTextStyle,
              this.props.cancelBtnTextStyle,
            ]}
          >
            {this.props.cancelBtnText}
          </Text>
        </TouchableHighlight>
      </Sheet>
    );
  }
}

ActionSheet.propTypes = {
    /**
     * @property visible
     * @type Boolean
     * @default false
     * @description 显示开关
     */
  visible: Sheet.propTypes.visible,
  // 按钮组
   /**
     * @property btnList
     * @type Object
     * @default [{
     *   style: null,
     *   text: '确定',
     *  textStyle: null,
     *   onPress: NOOP,
     * }]
     * @param {Object} style 按钮样式
     * @param {String} text 按钮文字
     * @param {Object} textStyle 按钮文字样式
     * @param {Function} onPress 按钮点击回调
     * @description 按钮组
     */
  btnList: PropTypes.arrayOf(PropTypes.shape({
    /* eslint-disable */
    
    style: View.propTypes.style,
   
    text: PropTypes.string,
    
    textStyle: Text.propTypes.style,
    
    onPress: PropTypes.func,
    /* eslint-enable */
  })),
    /**
     * @property btnStyle
     * @type Object
     * @default null
     * @description 统一按钮样式
     */
  btnStyle: View.propTypes.style,
    /**
     * @property btnTextStyle
     * @type Object
     * @default null
     * @description 统一按钮文字样式
     */
  btnTextStyle: Text.propTypes.style,
    /**
     * @property cancelBtnStyle
     * @type Object
     * @default null
     * @description 取消按钮样式
     */
  cancelBtnStyle: View.propTypes.style,
    /**
     * @property cancelBtnText
     * @type String
     * @default '取消'
     * @description 取消按钮文字
     */
  cancelBtnText: PropTypes.string,
    /**
     * @property cancelBtnTextStyle
     * @type Object
     * @default null
     * @description 取消按钮文字样式
     */
  cancelBtnTextStyle: Text.propTypes.style,
    /**
     * @property overlayStyle
     * @type Object
     * @default null
     * @description 遮罩层样式
     */
  overlayStyle: Sheet.propTypes.overlayStyle,
    /**
     * @property onClose
     * @type Function
     * @default NOOP
     * @description 关闭回调（动画结束时）
     */
  onClose: Sheet.propTypes.onClose,
    /**
     * @property duration
     * @type Number
     * @default 200
     * @description 动画时长
     */
  duration: Sheet.propTypes.duration,
    /**
     * @property style
     * @type Object
     * @default null
     * @description 自定义样式
     */
  style: View.propTypes.style,
    /**
     * @property underlayColor
     * @type String
     * @default '#eee'
     * @description 按钮点击透明度变化
     */
  underlayColor: PropTypes.string,
};
ActionSheet.defaultProps = {
  visible: false,
  btnList: [{
    style: null,
    text: '确定',
    textStyle: null,
    onPress: NOOP,
  }],
  btnStyle: null,
  btnTextStyle: null,
  cancelBtnStyle: null,
  cancelBtnText: '取消',
  cancelBtnTextStyle: null,
  overlayStyle: null,
  onClose: NOOP,
  duration: 200,
  style: null,
  underlayColor: '#eee',
};

export default ActionSheet;
