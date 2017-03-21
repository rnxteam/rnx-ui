import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  Article,
  NavBar,
} from 'BizComponent';
import Router from 'BizRouter';
import All from 'rnx-ui/All';
import PhoneNumInput from 'rnx-ui/PhoneNumInput';

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
  },
  inputContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
    height: 40,
  },
  input: {
    fontSize: 12,
  },
});

class Page extends Component {
  static section = 'Data Entry';

  render() {
    return (
      <All>
        <NavBar title="PhoneNumInput" />
        <ScrollView style={styles.scrollView}>

          <Article title="默认">
            <PhoneNumInput />
          </Article>
          <Article title="自定义">
            <PhoneNumInput
              style={styles.inputContainer}
              inputStyle={styles.input}
              placeholder="手机"
            />
          </Article>

        </ScrollView>
      </All>
    );
  }
}

Router.register('PhoneNumInput', Page);

export default Page;
