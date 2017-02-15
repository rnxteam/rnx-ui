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
  // 显示开关
  visible: Sheet.propTypes.visible,
  // 按钮组
  btnList: PropTypes.arrayOf(PropTypes.shape({
    /* eslint-disable */
    // 按钮样式
    style: View.propTypes.style,
    // 按钮文字
    text: PropTypes.string,
    // 按钮文字样式
    textStyle: Text.propTypes.style,
    // 按钮点击回调
    onPress: PropTypes.func,
    /* eslint-enable */
  })),
  // 统一按钮样式
  btnStyle: View.propTypes.style,
  // 统一按钮文字样式
  btnTextStyle: Text.propTypes.style,
  // 取消按钮样式
  cancelBtnStyle: View.propTypes.style,
  // 取消按钮文字
  cancelBtnText: PropTypes.string,
  // 取消按钮文字样式
  cancelBtnTextStyle: Text.propTypes.style,
  // 遮罩层样式
  overlayStyle: Sheet.propTypes.overlayStyle,
  // 关闭回调（动画结束时）
  onClose: Sheet.propTypes.onClose,
  // 动画时长
  duration: Sheet.propTypes.duration,
  // 自定义样式
  style: View.propTypes.style,
  // 按钮点击透明度变化
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
