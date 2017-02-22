/**
 * 主页面 rnx 面板
 */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import NavBar from 'rnx-ui/NavBar';

const styles = StyleSheet.create({
  all: {
    flex: 1,
  },
});

function Rnx() {
  return (
    <View style={styles.all}>
      <NavBar title="RNX" />
      <Text>
        rnx
      </Text>
    </View>
  );
}

export default Rnx;
