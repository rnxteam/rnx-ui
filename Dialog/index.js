import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Platform,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

import Overlay from '../Overlay';
import styles from './styles.js';

const isAndroid = Platform.OS === 'android';

class Dialog extends Component {

  makeBtns() {
    const len = this.props.buttons.length;

    return this.props.buttons.map((item, index) => {
      const btnStyle = [styles.btn, this.props.buttonStyle];
      if (index === 0) {
        btnStyle.push(styles.btnFirst);
      }

      // fix android
      const btnTouchableStyle = [styles.btnTouchable, this.props.buttonTouchableStyle];
      if (isAndroid) {
        if (index === 0) {
          btnTouchableStyle.push(styles.btnTouchableFirst);
        }
        if (index === len - 1) {
          btnTouchableStyle.push(styles.btnTouchableLast);
        }
      }

      return (
        <View style={btnStyle} key={index}>
          <TouchableHighlight
            underlayColor="#ebebeb"
            style={btnTouchableStyle}
            onPress={item.onPress}
          >
            <Text
              style={[styles.btnText, item.style]}
              numberOfLines={1}
            >
              {item.text}
            </Text>
          </TouchableHighlight>
        </View>
      );
    });
  }

  makeTitle() {
    let title = this.props.title;
    if (typeof title === 'string') {
      title = (
        title ? (
          <View style={styles.titleContainer}>
            <Text style={[styles.title, this.props.titleStyle]}>
              {title}
            </Text>
          </View>
        ) : null
      );
    }
    return title;
  }
  makeMessage() {
    let message = this.props.message;
    if (typeof message === 'string') {
      message = message ? (
        <Text style={[styles.message, this.props.messageStyle]}>
          {message}
        </Text>
      ) : null;
    }
    return message;
  }

  render() {
    const title = this.makeTitle();
    const message = this.makeMessage();

    return (
      <Overlay
        visible={this.props.visible}
        style={[styles.overlay, this.props.overlayStyle]}
        useAnimation={this.props.useOverlayAnimation}
      >
        <View style={[styles.dialog, this.props.style]}>
          <View style={styles.content}>
            { title }
            { message }
          </View>
          <View style={[styles.btnsContainer, this.props.buttonsContainerStyle]}>
            {
              this.makeBtns()
            }
          </View>
        </View>
      </Overlay>
    );
  }
}

Dialog.propTypes = {
  // 是否显示
  visible: PropTypes.bool,
  // 标题
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 标题文本样式（title 为字符串时才生效）
  titleStyle: Text.propTypes.style,
  // 内容
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 标题文本样式（title 为字符串时才生效）
  messageStyle: Text.propTypes.style,
  // 按钮容器样式
  buttonsContainerStyle: View.propTypes.style,
  // 按钮样式
  buttonStyle: View.propTypes.style,
  // 按钮控件样式
  buttonTouchableStyle: TouchableHighlight.propTypes.style,
  // 按钮
  buttons: PropTypes.arrayOf(PropTypes.shape({
    /* eslint-disable */
    // 按钮文本
    text: PropTypes.string,
    // 按钮样式
    style: Text.propTypes.style,
    // 按钮点击回调
    onPress: PropTypes.func,
    /* eslint-enable */
  })),
  // 弹框样式
  style: View.propTypes.style,
  // 遮罩层样式
  overlayStyle: View.propTypes.style,
  // 是否使用 Overlay 动画
  useOverlayAnimation: PropTypes.bool,
};
Dialog.defaultProps = {
  visible: false,
  title: '',
  titleStyle: null,
  message: '',
  messageStyle: null,
  buttonsContainerStyle: null,
  buttonStyle: null,
  buttonTouchableStyle: null,
  buttons: [],
  style: null,
  overlayStyle: null,
  useOverlayAnimation: true,
};

export default Dialog;
