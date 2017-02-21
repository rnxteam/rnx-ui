import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {
  Article,
  NavBar,
} from 'BizComponent';
import Router from 'BizRouter';
import All from 'rnx-ui/All';
import transPxToDp from 'rnx-ui/util/transPxToDp';

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
  },
  view1: {
    borderBottomWidth: 1,
  },
  view2: {
    borderBottomWidth: transPxToDp(1),
  },
});

function Page() {
  return (
    <All>
      <NavBar title="transPxToDp" />
      <ScrollView style={styles.scrollView}>
        <Article title="1 dp 的边框">
          <View style={styles.view1} />
        </Article>
        <Article title="1 px 的边框">
          <View style={styles.view2} />
        </Article>
      </ScrollView>
    </All>
  );
}

Router.register('TransPxToDp', Page);

export default Page;
