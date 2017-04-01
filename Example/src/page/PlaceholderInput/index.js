import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import All from 'rnx-ui/All';
import {
  Article,
  NavBar,
} from 'BizComponent';
import Router from 'BizRouter';
import PlaceholderInput from 'rnx-ui/PlaceholderInput';

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
  },
  PlaceholderInput: {
    width: 240,
    height: 35,
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 6,
    flex: 1,
  },
  PlaceholderText: {
    color: '#dcdcdc',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    color: 'red',
    marginLeft: 10,

  },
});

class Page extends Component {
  static section = 'Data Display';

  constructor(props) {
    super(props);
    this.state = {
      placeholder: '请输入内容',
      value: '',
    };
    this.textInputProps = {
      value: this.state.value,
    };
    this.required = true;
    this.name = 'PlaceholderInput';
    this.readableName = '输入框';
    this.require = true;
    this.changeText = this.changeText.bind(this);
    this.collectValidate = this.collectValidate.bind(this);
    this.message = '';
  }

  changeText(value) {
    this.setState({
      value,
    }, () => {
      this.textInputProps.value = this.state.value;
      this.require = value.length === 0;
    });
  }

  collectValidate(validate) {
    const message = validate();
    const { err, msg } = message;
    this.require = err === 1;
    this.message = msg;
  }

  render() {
    return (
      <All>
        <NavBar title="PlaceholderInput" />
        <ScrollView style={styles.scrollView} >
          <Article title="默认">
            <PlaceholderInput
              placeholder={this.state.placeholder}
              onChangeText={this.changeText}
            />

          </Article>
          <Article title="自定义">
            <PlaceholderInput
              style={styles.PlaceholderInput}
              placeholder={this.state.placeholder}
              placeholderStyle={styles.PlaceholderText}
              textInputProps={this.textInputProps}
              onChangeText={this.changeText}
            />
          </Article>
          <Article title=" 设置必填">
            <View style={styles.view}>
              <PlaceholderInput
                style={[styles.PlaceholderInput, { borderColor: this.require ? 'red' : '#ADADAD' }]}
                placeholder={this.state.placeholder}
                placeholderStyle={styles.PlaceholderText}
                onChangeText={this.changeText}
                textInputProps={this.textInputProps}
                required={this.required}
                collectValidate={this.collectValidate}
                readableName={this.readableName}
                name={this.name}
              />
              <Text style={[styles.text, { opacity: this.require ? 1 : 0 }]}>
                此项必填
                </Text>
            </View>
            <Text style={{ opacity: this.require ? 1 : 0 }}>
              message ：{ this.message }
            </Text>
          </Article>

        </ScrollView>
      </All>
    );
  }
}

Router.register('PlaceholderInput', Page);

export default Page;
