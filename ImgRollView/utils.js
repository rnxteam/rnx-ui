import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import style from './styles';

export const SelectTick = (params) => {
  const {
    selected,
    iconSelected,
    iconUnSelected,
    iconSelectedStyle,
    iconUnSelectedStyle,
  } = params;

  if (selected) {
    return (
      <View style={[style.selectedTick, iconSelectedStyle]}>
        {iconSelected}
      </View>
    );
  }
  return (
    <View style={[style.selectTick, iconUnSelectedStyle]}>
      {iconUnSelected}
    </View>
  );
};

SelectTick.propTypes = {
  selected: PropTypes.bool,
  iconSelected: PropTypes.element,
  iconUnSelected: PropTypes.element,
};

export const groupByEveryN = (array, num) => {
  const result = [];
  let temp = [];

  array.forEach((item, i) => {
    if (i > 0 && i % num === 0) {
      result.push(temp);
      temp = [];
    }
    temp.push(item);
  });

  if (temp.length > 0) {
    while (temp.length !== num) {
      temp.push(null);
    }
    result.push(temp);
  }

  return result;
};
