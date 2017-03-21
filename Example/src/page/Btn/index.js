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
  Icon,
  Article,
  NavBar,
} from 'BizComponent';
import Router from 'BizRouter';

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    width: 200,
  },
  btnText: {
    color: '#000',
  },
  btnContentContainerStyle: {
    flexDirection: 'row',
  },
  btnIcon: {
    marginRight: 5,
    color: '#fff',
  },
  btnDiyText: {
    color: '#fff',
  },
  btnDisabled: {
    backgroundColor: '#f7af9b',
  },
});

class Page extends Component {
  static section = 'Data Entry';

  onPress() {
    // console.log('onPress!');
  }
  render() {
    return (
      <All>
        <NavBar title="Btn" />
        <ScrollView style={styles.scrollView}>
          <Article title="默认">
            <Btn />
          </Article>
          <Article title="自定义">
            <Btn
              style={styles.btn}
              textStyle={styles.btnText}
              onPress={this.onPress}
            >
              自定义样式
            </Btn>
          </Article>
          <Article title="自定义内容">
            <Btn
              contentContainerStyle={styles.btnContentContainerStyle}
            >
              <Icon name="plug" style={styles.btnIcon} />
              <Text style={styles.btnDiyText}>
                内容也能自定义哦
              </Text>
            </Btn>
          </Article>
          <Article title="禁用状态">
            <Btn disabled style={styles.btnDisabled}>
              禁用的样式需要自己设置哦
            </Btn>
          </Article>
        </ScrollView>
      </All>
    );
  }
}

Router.register('Btn', Page);

export default Page;
