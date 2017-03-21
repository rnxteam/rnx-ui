import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import All from 'rnx-ui/All';
import Dialog from 'rnx-ui/Dialog';
import {
  NavBar,
  List,
} from 'BizComponent';
import Router from 'BizRouter';

const styles = StyleSheet.create({
  dialog: {
    width: 200,
  },
  title: {
    color: 'red',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  message: {
    color: 'red',
  },
  buttonsContainer: {
    height: 60,
  },
});

const items = [
  {
    content: '默认',
    onPress() {
      this.show(0);
    },
  },
  {
    content: '自定义',
    onPress() {
      this.show(1);
    },
  },
];

class Page extends Component {
  static section = 'Feedback';

  constructor(props) {
    super(props);
    this.state = {
      demo0: false,
      demo1: false,
    };
    this.hideMaker = this.hideMaker.bind(this);
  }

  show(index) {
    const state = {};
    state[`demo${index}`] = true;
    this.setState(state);
  }

  hide(index) {
    const state = {};
    state[`demo${index}`] = false;
    this.setState(state);
  }

  hideMaker(index) {
    return this.hide.bind(this, index);
  }

  render() {
    return (
      <All>
        <NavBar title="Dialog" />
        <List
          items={items}
          pressContext={this}
        />
        <Dialog
          visible={this.state.demo0}
          title="无法连接服务器"
          message="未能完成所请求的操作，因为与服务器的通信出错。"
          buttons={[{
            text: '好',
            onPress: this.hideMaker(0),
          }]}
        />
        <Dialog
          visible={this.state.demo1}
          title="自定义"
          titleStyle={styles.title}
          message={(
            <View>
              <Text>
                配置
              </Text>
              <Text style={styles.message}>
                message
              </Text>
            </View>
          )}
          buttonsContainerStyle={styles.buttonsContainer}
          buttons={[{
            text: '1',
            onPress: this.hideMaker(1),
          }, {
            text: '2',
            onPress: this.hideMaker(1),
          }, {
            text: '3',
            onPress: this.hideMaker(1),
            style: {
              fontWeight: 'bold',
            },
          }]}
          style={styles.dialog}
        />
      </All>
    );
  }
}

Router.register('Dialog', Page);

export default Page;
