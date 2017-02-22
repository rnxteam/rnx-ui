/**
 * 主页面 rnx-ui 面板
 */
import React from 'react';
import {
  StyleSheet,
  Alert,
  View,
} from 'react-native';
import RNPlus from 'rnplus';
import NavBar from 'rnx-ui/NavBar';
import {
  List,
} from 'BizComponent';

const styles = StyleSheet.create({
  all: {
    flex: 1,
  },
});

const items = [
  {
    type: 'title',
    text: 'component',
  },
  {
    content: 'Badge',
    onPress() {
      RNPlus.open('RnxUiBadge');
    },
  },
  {
    content: 'Btn',
    onPress() {
      RNPlus.open('RnxUiBtn');
    },
  },
  {
    content: 'Drop',
    onPress() {
      RNPlus.open('RnxUiDrop');
    },
  },
  {
    content: 'HeaderedSheet',
    onPress() {
      RNPlus.open('RnxUiHeaderedSheet');
    },
  },
  {
    content: 'ImgHolder',
    onPress() {
      RNPlus.open('RnxUiImgHolder');
    },
  },
  {
    content: 'KeyboardAdaptiveView',
    onPress() {
      RNPlus.open('RnxUiKeyboardAdaptiveView');
    },
  },
  {
    content: 'Loading',
    onPress() {
      RNPlus.open('RnxUiLoading');
    },
  },
  {
    content: 'NavBar',
    onPress() {
      RNPlus.open('RnxUiNavBar');
    },
  },
  {
    content: 'Number',
    onPress() {
      RNPlus.open('RnxUiNumber');
    },
  },
  {
    content: 'Overlay',
    onPress() {
      RNPlus.open('RnxUiOverlay');
    },
  },
  {
    content: 'PhoneNumInput',
    onPress() {
      RNPlus.open('RnxUiPhoneNumInput');
    },
  },
  {
    content: 'RefreshView',
    onPress() {
      RNPlus.open('RnxUiRefreshView');
    },
  },
  {
    content: 'Sheet',
    onPress() {
      RNPlus.open('RnxUiSheet');
    },
  },
  {
    content: 'SmsCaptchaInput',
    onPress() {
      RNPlus.open('RnxUiSmsCaptchaInput');
    },
  },
  {
    content: 'TabBar',
    onPress() {
      Alert.alert('当前页（Home）就是 TabBar 的例子哦');
    },
  },
  {
    content: 'ToolTip',
    onPress() {
      RNPlus.open('RnxUiToolTip');
    },
  },

  {
    type: 'title',
    text: 'util',
  },
  {
    content: 'transPxToDp',
    onPress() {
      RNPlus.open('RnxUiTransPxToDp');
    },
  },
  {
    content: 'Validator',
    onPress() {
      RNPlus.open('RnxUiValidator');
    },
  },
];

function Pane() {
  return (
    <View style={styles.all}>
      <NavBar title="RNX UI" />
      <List items={items} />
    </View>
  );
}

export default Pane;
