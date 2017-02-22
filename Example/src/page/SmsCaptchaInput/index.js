import React, {
  Component,
} from 'react';
import {
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  Article,
  NavBar,
} from 'BizComponent';
import Router from 'BizRouter';
import All from 'rnx-ui/All';
import SmsCaptchaInput from 'rnx-ui/SmsCaptchaInput';


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
  btn: {
    height: 15,
    paddingLeft: 10,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#ddd',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 12,
  },
});

class Page extends Component {
  constructor(props) {
    super(props);
    this.mockSuccess = true;

    this.state = {
      inputBtnDisabled: false,
    };

    this.onPressBtn = this.onPressBtn.bind(this);
    this.onStop = this.onStop.bind(this);
  }
  onPressBtn(start, stop) {
    this.setState({
      inputBtnDisabled: true,
    });
    // console.log('请求发短信接口');
    // mock
    setTimeout(() => {
      if (this.mockSuccess) {
        start();
      } else {
        Alert.alert('短信发送失败，请重试');
        stop();
      }
      this.mockSuccess = !this.mockSuccess;
    }, 2000);
  }
  onStop() {
    this.setState({
      inputBtnDisabled: false,
    });
  }
  onChangeText(captcha) {
    console.log(captcha);
  }
  render() {
    return (
      <All>
        <NavBar title="SmsCaptchaInput" />
        <ScrollView style={styles.scrollView}>

          <Article title="默认">
            <SmsCaptchaInput
              onPressBtn={this.onPressBtn}
            />
          </Article>
          <Article title="自定义">
            <SmsCaptchaInput
              style={styles.inputContainer}
              inputStyle={styles.input}
              btnTextStyle={[styles.buttonText, {
                color: this.state.inputBtnDisabled ? '#999' : 'red',
              }]}
              placeholder="Captcha"
              intervalTime={5}
              onPressBtn={this.onPressBtn}
              btnStyle={styles.btn}
              btnTextInital="Send Captcha"
              btnTextSending="Sending..."
              btnTextTiming="Resend in {time}s"
              btnTextTimed="Resend"
              placeholderTextColor="#798698"
              activeOpacity={0.7}
              onStop={this.onStop}
              codeLength={6}
              onChangeText={this.onChangeText}
            />
          </Article>

        </ScrollView>
      </All>
    );
  }
}

Router.register('SmsCaptchaInput', Page);

export default Page;
