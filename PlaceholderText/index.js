/**
 * @component PlaceholderText
 * @version 0.11.9
 * @description 有占位元素的文本显示组件
 * @instructions {instruInfo: ./PlaceholderText/PlaceholderText.md}
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

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
  /**
   * @property value
   * @type String
   * @default ''
   * @description 值
   */
  value: PropTypes.string,
  /**
   * @property valueStyle
   * @type Object
   * @default null
   * @description 值自定义样式
   */
  valueStyle: Text.propTypes.style,
  /**
   * @property style
   * @type Object
   * @default null
   * @description 自定义样式
   */
  style: View.propTypes.style,
  /**
   * @property placeholder
   * @type String Element
   * @default ''
   * @description 占位元素
   */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * @property placeholderStyle
   * @type Object
   * @default null
   * @description 占位元素样式（placeholder 为字符串时才生效）
   */
  placeholderStyle: Text.propTypes.style,
  /**
   * @property onPress
   * @type Function
   * @default NOOP
   * @description 点击回调
   */
  onPress: PropTypes.func,
  /**
   * @property name
   * @type String
   * @default ''
   * @description 用来在校验器中做标识
   */
  name: PropTypes.string,
  /**
   * @property readablename
   * @type String
   * @default ''
   * @description 用来在校验器中组成错误信息
   */
  readableName: PropTypes.string,
  /**
   * @property collectValidate
   * @type String
   * @default ''
   * @description 校验器接口
   */
  collectValidate: PropTypes.func,
  /**
   * @property required
   * @type Boolean
   * @default false
   * @description 是否必要
   */
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
