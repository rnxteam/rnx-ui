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
  // 自定义样式
  style: View.propTypes.style,
  // 初始值
  defaultValue: PropTypes.string,
  // 自定义输入框样式
  inputStyle: TextInput.propTypes.style,
  // 占位元素
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 占位元素样式（placeholder 为字符串时才生效）
  placeholderStyle: Text.propTypes.style,
  // onChangeText 的第二个参数，同时在校验器中做标识
  name: PropTypes.string,
  // 用来在校验器中组成错误信息
  readableName: PropTypes.string,
  // 校验器接口
  collectValidate: PropTypes.func,
  // 是否必要
  required: PropTypes.bool,
  // 输入回调
  onChangeText: PropTypes.func,
  // TextInput 属性
  textInputProps: PropTypes.object,
  // 获取 TextInput 元素
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
