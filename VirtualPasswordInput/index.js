import React, { Component, PropTypes } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import styles from './styles.js';

const NOOP = () => {};

class VirtualPasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  getCells() {
    const cells = [];

    for (let i = 0; i < this.props.maxLength; i += 1) {
      const cellValue = this.props.value[i];
      let child = null;

      if (cellValue) {
        if (this.props.secureTextEntry) {
          child = <View style={[styles.secure, this.props.secureStyle]} />;
        } else {
          child = <Text style={this.props.textStyle}>{cellValue}</Text>;
        }
      }

      cells.push((
        <View key={i} style={[styles.cell, this.props.cellStyle]}>
          {child}
        </View>
      ));
    }

    return cells;
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={[styles.all, this.props.style]} >
          <View style={[styles.container, this.props.containerStyle]}>
            { this.getCells() }
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

}

VirtualPasswordInput.propTypes = {
  // 值
  value: PropTypes.string,
  // 是否启用安全输入
  secureTextEntry: PropTypes.bool,
  // 最外层样式
  style: View.propTypes.style,
  // 容器样式
  containerStyle: View.propTypes.style,
  // 单个输入框样式
  cellStyle: View.propTypes.style,
  // 安全码样式
  secureStyle: View.propTypes.style,
  // 文本样式
  textStyle: Text.propTypes.style,
  // 最大长度
  maxLength: PropTypes.number,
  // 点击回调
  onPress: PropTypes.func,
};
VirtualPasswordInput.defaultProps = {
  value: '',
  secureTextEntry: true,
  style: null,
  containerStyle: null,
  cellStyel: null,
  secureStyle: null,
  textStyle: null,
  maxLength: 6,
  onPress: NOOP,
};

export default VirtualPasswordInput;
