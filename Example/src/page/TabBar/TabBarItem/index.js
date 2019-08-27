/**
 * TabBar item 组件
 */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import { Icon } from '../../../component';

const styles = StyleSheet.create({
  all: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 3,
  },
  text: {
    fontSize: 8,
    color: '#798698',
  },
});

function TabBarItem(props) {
  return (
    <View style={styles.all}>
      <Icon
        name={props.iconName}
        style={[styles.icon, {
          color: props.color,
        }]}
      />
      <Text
        style={[styles.text, {
          color: props.color,
        }]}
      >
        {props.title}
      </Text>
    </View>
  );
}

TabBarItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

TabBarItem.defaultProps = {
  iconName: '',
  title: '',
  color: '#000',
};

export default TabBarItem;
