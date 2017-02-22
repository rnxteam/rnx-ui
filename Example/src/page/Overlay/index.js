import React, {
  Component,
} from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  NavBar,
  List,
} from 'BizComponent';
import Router from 'BizRouter';
import All from 'rnx-ui/All';
import Overlay from 'rnx-ui/Overlay';
import Btn from 'rnx-ui/Btn';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 10,
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
  }

  onOverlayPress() {
    // console.log('press overlay');
  }

  onBtnPress() {
    // console.log('press btn');
  }

  show(index) {
    const state = {};
    state[`demo${index}`] = true;
    this.setState(state);
    setTimeout(() => {
      state[`demo${index}`] = false;
      this.setState(state);
    }, 1000);
  }

  render() {
    return (
      <All>
        <NavBar title="Overlay" />
        <List
          items={items}
          pressContext={this}
        />
        <Overlay
          visible={this.state.demo0}
        />
        <Overlay
          visible={this.state.demo1}
          style={styles.overlay}
          onPress={this.onOverlayPress}
        >
          <Btn style={styles.btn} onPress={this.onBtnPress}>
            我是遮罩层上的按钮
          </Btn>
        </Overlay>
      </All>
    );
  }
}

Router.register('Overlay', Page);

export default Page;
