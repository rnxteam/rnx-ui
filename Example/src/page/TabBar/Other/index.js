/**
 * 主页面 other 面板
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

function Other() {
  return (
    <View style={styles.all}>
      <NavBar title="Other" />
      <Text>
        other
      </Text>
    </View>
  );
}

export default Other;
