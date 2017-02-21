import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import RnxUiNavBar from 'rnx-ui/NavBar';
import Router from 'BizRouter';

import Icon from '../Icon';

class NavBar extends RnxUiNavBar {}

const COLOR_NAVBAR_TEXT = '#fff';

const styles = StyleSheet.create({
  leftBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    color: COLOR_NAVBAR_TEXT,
  },
  leftBtnText: {
    marginLeft: 5,
    color: COLOR_NAVBAR_TEXT,
  },
});

NavBar.defaultProps = {
  ...RnxUiNavBar.defaultProps,
  leftBtn: (
    <View style={styles.leftBtn}>
      <Icon name="angle-left" style={styles.leftIcon} />
      <Text style={styles.leftBtnText} >
        {'返回'}
      </Text>
    </View>
  ),
  leftEvent: Router.back,
};

export default NavBar;
