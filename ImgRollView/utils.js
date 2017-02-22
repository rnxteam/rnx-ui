import React, { PropTypes } from 'react';
import { View } from 'react-native';

import style from './styles';

export const SelectTick = ({ selected, iconSelected, iconUnSelected }) => {
  if (selected) {
    return (
      <View style={style.selectedTick}>
        {iconSelected}
      </View>
    );
  }
  return (
    <View style={style.selectTick}>
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
