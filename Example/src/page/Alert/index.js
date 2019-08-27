import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import All from 'rnx-ui/All';
import Alert from 'rnx-ui/Alert';
import {
  NavBar,
  List,
} from '../../component';
import Router from '../../router';

const styles = StyleSheet.create({
  alert: {
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
  buttonText: {
    color: 'red',
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
        <NavBar title="Alert" />
        <List
          items={items}
          pressContext={this}
        />
        <Alert
          visible={this.state.demo0}
          title="无法连接服务器"
          message="未能完成所请求的操作，因为与服务器的通信出错。"
          onPress={this.hideMaker(0)}
        />
        <Alert
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
          buttonText="吼啊"
          buttonTextStyle={styles.buttonText}
          onPress={this.hideMaker(1)}
          style={styles.alert}
        />
      </All>
    );
  }
}

Router.register('Alert', Page);

export default Page;
