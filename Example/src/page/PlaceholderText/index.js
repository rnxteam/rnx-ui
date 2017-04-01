import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import All from 'rnx-ui/All';
import Btn from 'rnx-ui/Btn';
import {
  Article,
  NavBar,
} from 'BizComponent';
import Router from 'BizRouter';
import PlaceholderText from 'rnx-ui/PlaceholderText';

const TEXT_ARR = [
  '内容一',
  '内容二',
  '内容三',
  '',
  '内容四',
];

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
  },
  Placeholder: {
    width: 400,
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 3,
  },
  PlaceholderText: {
    color: '#eee',
  },
  btn: {
    marginTop: 10,
    width: 150,
  },
  btnText: {
    color: '#fff',
  },
});

class Page extends Component {
  static section = 'Data Display';

  constructor(props) {
    super(props);
    this.state = {
      placeholder: '占位元素',
      placeholderValue: '设置占位元素样式',
      value: '内容一',
    };
    this.changeTimes = 0;
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.setState({
      value: TEXT_ARR[this.changeTimes % 5],
    });
    this.changeTimes += 1;
  }

  render() {
    return (
      <All>
        <NavBar title="PlaceholderText" />
        <ScrollView style={styles.scrollView} >
          <Article title="占位元素">
            <PlaceholderText
              placeholder={this.state.placeholder}
              style={styles.Placeholder}
            />
          </Article>
          <Article title="自定义样式">
            <PlaceholderText
              placeholder={this.state.placeholderValue}
              placeholderStyle={styles.placeholderText}
              style={styles.Placeholder}
            />
          </Article>

          <Article title="如果没有任何文字输入，会显示placeholder中设置的占位元素">
            <PlaceholderText
              placeholder={this.state.placeholder}
              placeholderStyle={styles.placeholderText}
              value={this.state.value}
              style={styles.Placeholder}
            />
            <Btn
              style={styles.btn}
              onPress={this.onPress}
            >
              <Text
                style={styles.btnText}
              >
                      点击更改文字内容
                  </Text>
            </Btn>
          </Article>
        </ScrollView>
      </All>
    );
  }
}

Router.register('PlaceholderText', Page);

export default Page;
