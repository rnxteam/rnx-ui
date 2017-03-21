import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  NavBar,
  Article,
} from 'BizComponent';
import Router from 'BizRouter';
import All from 'rnx-ui/All';
import VirtualPasswordInput from 'rnx-ui/VirtualPasswordInput';
import NumericKeyboard from 'rnx-ui/NumericKeyboard';
import Sheet from 'rnx-ui/Sheet';
import Btn from 'rnx-ui/Btn';

const styles = StyleSheet.create({
  srcollView: {
    paddingHorizontal: 10,
  },
});

const PSWD_MAX_LENGTH = {
  pswd0: 6,
  pswd1: 4,
};

class Page extends Component {
  static section = 'Data Entry';

  constructor(props) {
    super(props);

    this.state = {
      kbdVisible: false,
      pswd0: '',
      pswd1: '',
      secureTextEntry: true,
    };

    this.onPressPswdInput0 = this.onPressPswdInput0.bind(this);
    this.onPressPswdInput1 = this.onPressPswdInput1.bind(this);
    this.onPressSheet = this.onPressSheet.bind(this);
    this.onInput = this.onInput.bind(this);
    this.switchSecureTextEntry = this.switchSecureTextEntry.bind(this);
  }

  onPressPswdInput0() {
    this.currentPswd = 'pswd0';
    this.setState({
      kbdVisible: true,
    });
  }
  onPressPswdInput1() {
    this.currentPswd = 'pswd1';
    this.setState({
      kbdVisible: true,
    });
  }

  onPressSheet() {
    this.setState({
      kbdVisible: false,
    });
  }

  onInput(value) {
    const pswdName = this.currentPswd;

    const pswd = this.state[pswdName];
    if (value === 'DELETE') {
      if (pswd.length) {
        this.setState({
          [pswdName]: pswd.substr(0, pswd.length - 1),
        });
      }
    } else if (pswd.length < PSWD_MAX_LENGTH[pswdName]) {
      this.setState({
        [pswdName]: pswd + value,
      });
    }
  }

  switchSecureTextEntry() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  render() {
    return (
      <All>
        <NavBar title="VirtualPasswordInput" />
        <ScrollView style={styles.srcollView}>
          <Article title="默认样式">
            <VirtualPasswordInput
              onPress={this.onPressPswdInput0}
              value={this.state.pswd0}
              secureTextEntry={this.state.secureTextEntry}
              maxLength={PSWD_MAX_LENGTH.pswd0}
            />
          </Article>
          <Article title="自定义样式">
            <VirtualPasswordInput
              onPress={this.onPressPswdInput1}
              value={this.state.pswd1}
              secureTextEntry={this.state.secureTextEntry}
              maxLength={PSWD_MAX_LENGTH.pswd1}
              containerStyle={{
                borderColor: 'red',
              }}
              cellStyle={{
                height: 50,
                width: 50,
                borderColor: 'red',
              }}
              secureStyle={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: 'red',
              }}
              textStyle={{
                fontSize: 20,
                color: 'red',
              }}
            />
          </Article>
          <Btn onPress={this.switchSecureTextEntry}>
            切换安全输入
          </Btn>
        </ScrollView>
        <Sheet
          visible={this.state.kbdVisible}
          onPressOverlay={this.onPressSheet}
        >
          <NumericKeyboard
            onPress={this.onInput}
          />
        </Sheet>
      </All>
    );
  }
}

Router.register('VirtualPasswordInput', Page);

export default Page;
