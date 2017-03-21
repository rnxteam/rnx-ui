import React, {
  Component,
} from 'react';
import All from 'rnx-ui/All';
import Alert from 'rnx-ui/Alert';
import {
  NavBar,
  List,
} from 'BizComponent';
import Router from 'BizRouter';

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
  {
    content: '自定义2',
    onPress() {
      this.show(2);
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
      demo2: false,
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
          buttons={[{
            text: '吼啊',
            onPress: this.hideMaker(0),
          }]}
        />
        <Alert
          visible={this.state.demo1}
          title="未能完成所请求的操作，因为与服务器的通信出错。"
          message="未能完成所请求的操作，因为与服务器的通信出错。"
          buttons={[{
            text: '未能完成所请求的操作，因为与服务器的通信出错。',
            onPress: this.hideMaker(1),
          }, {
            text: '未能完成所请求的操作，因为与服务器的通信出错。',
            onPress: this.hideMaker(1),
          }]}
        />
        <Alert
          visible={this.state.demo2}
          title="hehe"
          buttons={[{
            text: '1',
            onPress: this.hideMaker(2),
          }, {
            text: '2',
            onPress: this.hideMaker(2),
          }, {
            text: '3',
            onPress: this.hideMaker(2),
            style: {
              fontWeight: 'bold',
            },
          }]}
        />
      </All>
    );
  }
}

Router.register('Alert', Page);

export default Page;
