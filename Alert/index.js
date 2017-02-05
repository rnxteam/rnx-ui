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

const NOOP = () => {};

const isAndroid = Platform.OS === 'android';

class Alert extends Component {

  getBtns() {
    const len = this.props.buttons.length;

    return this.props.buttons.map((item, index) => {
      const btnStyle = [styles.btn];
      if (index === 0) {
        btnStyle.push(styles.btnFirst);
      }

      // fix android
      const btnTouchableStyle = [styles.btnTouchable];
      if (isAndroid) {
        if (index === 0) {
          btnTouchableStyle.push(styles.btnTouchableFirst);
        } else if (index === len - 1) {
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

  render() {
    return (
      <Overlay
        visible={this.props.visible}
        style={[styles.overlay, this.props.overlayStyle]}
      >
        <View style={styles.alert}>
          <View style={styles.content}>
            {
              this.props.title ? (
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>
                    {this.props.title}
                  </Text>
                </View>
              ) : null
            }
            {
              this.props.message ? (
                <View style={styles.messageContainer}>
                  <Text style={styles.message}>
                    {this.props.message}
                  </Text>
                </View>
              ) : null
            }
          </View>
          <View style={styles.btnsContainer}>
            {
              this.getBtns()
            }
          </View>
        </View>
      </Overlay>
    );
  }
}

Alert.propTypes = {
  // 是否显示
  visible: PropTypes.bool,
  // 标题
  title: PropTypes.string,
  // 内容
  message: PropTypes.string,
  // 按钮
  buttons: PropTypes.arrayOf(PropTypes.shape({
    /* eslint-disable */
    text: PropTypes.string,
    style: Text.propTypes.style,
    onPress: PropTypes.func,
    /* eslint-enable */
  })),
  // 遮罩层样式
  overlayStyle: View.propTypes.style,
};
Alert.defaultProps = {
  visible: true,
  title: '',
  message: '',
  buttons: [{
    text: '好',
    style: null,
    onPress: NOOP,
  }],
  overlayStyle: null,
};

export default Alert;
