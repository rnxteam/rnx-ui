import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import All from 'rnx-ui/All';
import PhoneNumInput from 'rnx-ui/PhoneNumInput';
import SmsCaptchaInput from 'rnx-ui/SmsCaptchaInput';
import Btn from 'rnx-ui/Btn';
import Validator from 'rnx-ui/util/Validator';

import {
  NavBar,
} from '../../component';
import Router from '../../router';

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  btn: {
    marginTop: 10,
  },
});

class Page extends Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
    // 验证器初始化
    const validator = new Validator();
    this.validator = validator;
    this.collectValidate = validator.collect;
  }
  onPress() {
    const res = this.validator.run();
    /* eslint-disable */
    console.log(res);
    /* eslint-enable */
  }
  render() {
    return (
      <All>
        <NavBar title="Validator" />
        <ScrollView style={styles.scrollView}>
          <PhoneNumInput
            collectValidate={this.collectValidate}
            name="HANDSOME_NAME"
            readableName="帅气的名字"
          />
          <SmsCaptchaInput collectValidate={this.collectValidate} />
          <Btn
            style={styles.btn}
            onPress={this.onPress}
          />
        </ScrollView>
      </All>
    );
  }
}

Router.register('Validator', Page);

export default Page;
