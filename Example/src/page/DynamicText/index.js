import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import All from 'rnx-ui/All';
import DynamicText from 'rnx-ui/DynamicText';
import {
  Article,
  NavBar,
} from 'BizComponent';
import Router from 'BizRouter';
import {
  COLOR_THEME,
  COLOR_BORDER,
} from 'rnx-ui/constant';

const styles = StyleSheet.create({
  reverse: {
    backgroundColor: COLOR_THEME,
    paddingHorizontal: 10,
  },
  reverseText: {
    color: '#fff',
  },
  restart: {
    backgroundColor: COLOR_BORDER,
  },
  center: {
    width: 300,
    height: 60,
    backgroundColor: COLOR_THEME,
  },
  centerText: {
    color: '#fff',
    fontSize: 30,
  },
});

class Page extends Component {
  render() {
    return (
      <All>
        <NavBar title="DynamicText" />
        <ScrollView style={styles.scrollView}>
          <Article title="默认mode：reverse, 默认speed:5, 默认bufferTime:500">
            <DynamicText
              style={styles.reverse}
              textStyle={styles.reverseText}
              text="开始:测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字:结束"
            />
          </Article>
          <Article title="mode: restart, speed:10, bufferTime: 1000">
            <DynamicText
              style={styles.restart}
              mode="restart"
              speed={10}
              bufferTime={1000}
              text="开始:测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字:结束"
            />
          </Article>
          <Article title="文字不超长，居中显示">
            <DynamicText
              style={styles.center}
              textStyle={styles.centerText}
              text="测试文字"
            />
          </Article>
        </ScrollView>
      </All>
    );
  }
}

Router.register('DynamicText', Page);

export default Page;
