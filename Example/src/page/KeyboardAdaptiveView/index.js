import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  NavBar,
} from 'BizComponent';
import All from 'rnx-ui/All';
import Router from 'BizRouter';

import Column from './Column';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
});

class Page extends Component {
  constructor(props) {
    super(props);
    this.onNoteFocus = this.onNoteFocus.bind(this);
  }
  onNoteFocus(e) {
    if (this.keyboardAdaptiveView) {
      this.keyboardAdaptiveView.inputFocusHandle(e);
    }
  }
  render() {
    return (
      <All>
        <NavBar title="KeyboardAdaptiveView" />
        <View style={styles.container}>
          <Column />
          <Column />
        </View>
      </All>
    );
  }
}

Router.register('KeyboardAdaptiveView', Page);

export default Page;
