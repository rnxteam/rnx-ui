import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const NOOP = () => {};

class PlaceholderText extends Component {
  constructor(props) {
    super(props);
    props.collectValidate(this.validate.bind(this));
  }

  validate() {
    const value = this.props.value;
    const res = {
      name: this.props.name,
      value,
    };

    if (this.props.required) {
      if (value === '') {
        return {
          ...res,
          err: 1,
          errType: 'NO_EMPTY',
          msg: `${this.props.readableName}不能为空`,
        };
      }
    }

    return {
      ...res,
      err: 0,
      errType: '',
      msg: '成功',
    };
  }

  makePlaceholder() {
    let placeholder = this.props.placeholder;
    if (typeof placeholder === 'string') {
      placeholder = (
        <Text
          style={[styles.placeholder, this.props.placeholderStyle]}
          numberOfLines={1}
        >
          {this.props.placeholder}
        </Text>
      );
    }
    return placeholder;
  }

  render() {
    const placeholder = this.makePlaceholder();
    const placeholderContainerStyle = [styles.placeholderContainer];

    if (this.props.value) {
      placeholderContainerStyle.push(styles.placeholderContainerHide);
    }

    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPress}
      >
        <View style={[styles.all, this.props.style]}>
          <Text style={[styles.value, this.props.valueStyle]} numberOfLines={1}>
            {this.props.value}
          </Text>
          <View style={placeholderContainerStyle}>
            {placeholder}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

PlaceholderText.propTypes = {
  // 值
  value: PropTypes.string,
  // 值自定义样式
  valueStyle: Text.propTypes.style,
  // 自定义样式
  style: View.propTypes.style,
  // 占位元素
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 占位元素样式（placeholder 为字符串时才生效）
  placeholderStyle: Text.propTypes.style,
  // 点击回调
  onPress: PropTypes.func,
  // 用来在校验器中做标识
  name: PropTypes.string,
  // 用来在校验器中组成错误信息
  readableName: PropTypes.string,
  // 校验器接口
  collectValidate: PropTypes.func,
  // 是否必要
  required: PropTypes.bool,
};
PlaceholderText.defaultProps = {
  value: '',
  valueStyle: null,
  style: null,
  placeholder: '',
  placeholderStyle: null,
  onPress: NOOP,
  name: '',
  readableName: '',
  collectValidate: NOOP,
  required: false,
};

export default PlaceholderText;
