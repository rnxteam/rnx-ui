import React, {
  Component,
} from 'react';
import All from 'rnx-ui/All';
import Loading from 'rnx-ui/Loading';
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
];

class Page extends Component {
  static section = 'Feedback';

  constructor(props) {
    super(props);
    this.state = {
      demo0: false,
      demo1: false,
    };
  }

  show(index) {
    const state = {};
    state[`demo${index}`] = true;
    this.setState(state);
    setTimeout(() => {
      this.hide(index);
    }, 1000);
  }

  hide(index) {
    const state = {};
    state[`demo${index}`] = false;
    this.setState(state);
  }

  render() {
    return (
      <All>
        <NavBar title="Loading" />
        <List
          items={items}
          pressContext={this}
        />
        <Loading visible={this.state.demo0} />
        <Loading
          visible={this.state.demo1}
          overlayStyle={{
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
          }}
          color="red"
          size="large"
        />
      </All>
    );
  }
}

Router.register('Loading', Page);

export default Page;
