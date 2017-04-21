/**
 * @component PlaceholderInput
 * @version 0.11.9
 * @description 可以自定义占位元素的输入框
 * React Native 提供的 `TextInput` 组件的 `placeholder` 可定制程度太低了，`PlaceholderInput` 应运而生。
 * @instructions {instruInfo: ./PlaceholderInput/PlaceholderInput.md}
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  View,
  TextInput,
  Text,
} from 'react-native';

import styles from './styles';

const NOOP = () => {};

class PlaceholderInput extends Component {
  constructor(props) {
    super(props);

    this.value = props.defaultValue;

    this.getInput = this.getInput.bind(this);
    this.onChangeText = this.onChangeText.bind(this);

    props.collectValidate(this.validate.bind(this));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue !== this.props.defaultValue) {
      this.value = nextProps.defaultValue;
      // 触发下 render，使 placeholder 消失或出现
      this.forceUpdate();
    }
  }

  onChangeText(value) {
    if (this.value !== !!value) {
      // 由有到无由无到有
      // 触发下 render，使 placeholder 消失或出现
      this.forceUpdate();
    }
    this.value = value;
    this.props.onChangeText(value, this.props.name);
  }

  getInput(el) {
    this.input = el;
    this.props.getInput(el);
  }

  validate() {
    const value = this.value;
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
    const placeholderContainerStyle = [styles.fill];

    if (this.value) {
      placeholderContainerStyle.push(styles.fillHide);
    }

    return (
      <View style={[styles.all, this.props.style]}>
        <View style={placeholderContainerStyle}>
          {placeholder}
        </View>
        <TextInput
          {...this.props.textInputProps}
          defaultValue={this.props.defaultValue}
          style={[styles.fill, styles.input, this.props.inputStyle]}
          ref={this.getInput}
          onChangeText={this.onChangeText}
        />
      </View>
    );
  }
}

PlaceholderInput.propTypes = {
  /**
   * @property style
   * @type Object
   * @default null
   * @description 自定义样式
   */
  style: View.propTypes.style,
  /**
   * @property defaultValue
   * @type String
   * @default ''
   * @description 初始值
   */
  defaultValue: PropTypes.string,
  /**
   * @property inputStyle
   * @type Object
   * @default null
   * @description 自定义输入框样式
   */
  inputStyle: TextInput.propTypes.style,
  /**
   * @property placeholder
   * @type String  Element
   * @default ''
   * @description 占位元素
   */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * @property placeholderStyle
   * @type Object
   * @default null
   * @description 占位元素样式 （placeholder 为字符串时才生效）
   */
  placeholderStyle: Text.propTypes.style,
  /**
   * @property name
   * @type String
   * @default ''
   * @description onChangeText 的第二个参数，同时在校验器中做标识
   */
  name: PropTypes.string,
  /**
   * @property readableName
   * @type String
   * @default ''
   * @description 用来在校验器中组成错误信息
   */
  readableName: PropTypes.string,
  /**
   * @property collectValidate
   * @type Function
   * @default NOOP
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
  /**
   * @property onChangeText
   * @type Function
   * @default NOOP
   * @description 输入回调
   */
  onChangeText: PropTypes.func,
  /* eslint-disable */
  /**
   * @property textInputProps
   * @type Object
   * @default {}
   * @description TextInput 属性
   */
  textInputProps: PropTypes.object,
  /* eslint-enable */
  // 获取 TextInput 元素
  /**
   * @property getInput
   * @type Funciton
   * @default NOOP
   * @description 获取 TextInput 元素
   */
  getInput: PropTypes.func,
};
PlaceholderInput.defaultProps = {
  style: null,
  defaultValue: '',
  inputStyle: null,
  placeholder: '',
  placeholderStyle: null,
  name: '',
  readableName: '',
  collectValidate: NOOP,
  required: false,
  onChangeText: NOOP,
  textInputProps: {},
  getInput: NOOP,
};

export default PlaceholderInput;
