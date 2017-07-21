import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Text,
} from 'react-native';

import Dialog from '../Dialog';

const NOOP = () => {};

class Alert extends Component {
  render() {
    return (
      <Dialog
        {...this.props}
        buttons={[{
          text: this.props.buttonText,
          style: this.props.buttonTextStyle,
          onPress: this.props.onPress,
        }]}
      />
    );
  }
}

Alert.propTypes = {
  ...Dialog.propTypes,
  // 按钮文本
  buttonText: PropTypes.string,
  // 按钮文本样式
  buttonTextStyle: Text.propTypes.style,
  // 按钮点击回调
  onPress: PropTypes.func,
};
Alert.defaultProps = {
  ...Dialog.defaultProps,
  buttonText: '好',
  buttonTextStyle: null,
  onPress: NOOP,
};

export default Alert;
