import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const ICON_MAP = {
  menu: '\uf0c9',
  'angle-left': '\uf104',
  'commenting-o': '\uf27b',
  bomb: '\uf1e2',
  bolt: '\uf0e7',
  plug: '\uf1e6',
  rocket: '\uf135',
  cart: '\uf07a',
  'fa-plus': '\uf067',
  'fa-minus': '\uf068',
  'fa-check': '\uf00c',
};

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'FontAwesome',
  },
});

function Icon(props) {
  return (
    <Text style={[styles.icon, props.style]}>{ICON_MAP[props.name]}</Text>
  );
}

Icon.propTypes = {
  // 字符名字
  name: PropTypes.string.isRequired,
  // 自定义样式
  style: Text.propTypes.style,
};
Icon.defaultProps = {
  name: '',
  style: null,
};

export default Icon;
