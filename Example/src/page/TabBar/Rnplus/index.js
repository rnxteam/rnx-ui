/**
 * 主页面 rnplus 面板
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

function Rnplus() {
  return (
    <View style={styles.all}>
      <NavBar title="RNPlus" />
      <Text>
        rnplus
      </Text>
    </View>
  );
}

export default Rnplus;
