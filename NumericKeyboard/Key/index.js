// @flow
import * as React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import styles, {
  DISABLED_COLOR,
} from './styles';

const NOOP = () => {};

type Props = {
  // 值
  value?: string,
  // 是否禁用
  disabled?: bool,
  // 子元素
  children?: React.Node,
  // 是否所在行的第一项
  isFirst?: bool,
  // 样式类型
  type?: 'light' | 'dark',
  // 点击回调
  onPress?: (text: string) => void,
};

class Key extends React.Component<Props> {
  static defaultProps = {
    value: '',
    disabled: false,
    children: null,
    isFirst: false,
    type: 'light',
    onPress: NOOP,
  };

  style: Array<StyleObj> = [styles.key];
  disabledColor: string = DISABLED_COLOR;
  children: React.Node;
  onPress: null | (text: string) => void = (text: string) => {
    // $FlowFixMe: suppressing this error until we can refactor
    this.props.onPress(text);
  };
  constructor(props: Props) {
    super(props);

    // 样式处理
    if (props.isFirst) {
      this.style.push(styles.firstKeyInLine);
    }
    if (props.type === 'dark') {
      this.style.push(styles.disabledKey);
      this.disabledColor = '#fff';
    }

    // 子元素处理
    const children = props.children;
    if (typeof children === 'string') {
      this.children = (
        <Text style={styles.text}>
          {children}
        </Text>
      );
    } else {
      this.children = children;
    }

    // 点击事件处理
    if (props.disabled) {
      this.onPress = null;
    } else {
      // $FlowFixMe: suppressing this error until we can refactor
      this.onPress = this.onPress.bind(this, props.value);
    }
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor={this.disabledColor}
        style={styles.btn}
        onPress={this.onPress}
      >
        <View
          style={this.style}
        >
          {this.children}
        </View>
      </TouchableHighlight>
    );
  }
}

export default Key;
