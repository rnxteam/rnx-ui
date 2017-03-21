import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import All from 'rnx-ui/All';
import Confirm from 'rnx-ui/Confirm';
import {
  NavBar,
  List,
} from 'BizComponent';
import Router from 'BizRouter';

const styles = StyleSheet.create({
  confirm: {
    width: 200,
  },
  redText: {
    color: 'red',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
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
        <NavBar title="Confirm" />
        <List
          items={items}
          pressContext={this}
        />
        <Confirm
          visible={this.state.demo0}
          title="无法连接服务器"
          message="未能完成所请求的操作，因为与服务器的通信出错。"
          onCancel={this.hideMaker(0)}
          onConfirm={this.hideMaker(0)}
        />
        <Confirm
          visible={this.state.demo1}
          title="自定义"
          titleStyle={styles.redText}
          message={(
            <View>
              <Text>
                配置
              </Text>
              <Text style={styles.redText}>
                message
              </Text>
            </View>
          )}
          buttonsContainerStyle={styles.buttonsContainer}
          cancelText="不吼"
          cancelTextStyle={styles.redText}
          onCancel={this.hideMaker(1)}
          confirmText="吼啊"
          confirmTextStyle={styles.redText}
          onConfirm={this.hideMaker(1)}
          style={styles.confirm}
        />
      </All>
    );
  }
}

Router.register('Confirm', Page);

export default Page;
