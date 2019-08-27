/* eslint-disable no-console */
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
} from 'react-native';
import All from 'rnx-ui/All';
import Overlay from 'rnx-ui/Overlay';
import Btn from 'rnx-ui/Btn';

import {
  NavBar,
  List,
} from '../../component';
import Router from '../../router';

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
  {
    content: '无动画',
    onPress() {
      this.show(2);
    },
  },
  {
    content: '不捕获触摸事件',
    onPress() {
      this.show(3);
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
      demo3: false,
    };
    this.onBtnPress = this.onBtnPress.bind(this);
  }

  onOverlayPress() {
    console.log('press overlay');
  }
  onBtnPress() {
    this.setState({
      demo1: false,
    });
  }
  onShow() {
    console.log('onShow');
  }
  onHide() {
    console.log('onHide');
  }

  show(index) {
    const state = {};
    state[`demo${index}`] = true;
    this.setState(state);
    if (index !== 1) {
      setTimeout(() => {
        state[`demo${index}`] = false;
        this.setState(state);
      }, 1000);
    }
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
          duration={2000}
          onShow={this.onShow}
          onHide={this.onHide}
        >
          <Btn style={styles.btn} onPress={this.onBtnPress}>
            点我关闭
          </Btn>
        </Overlay>
        <Overlay
          visible={this.state.demo2}
          useAnimation={false}
        />
        <Overlay
          visible={this.state.demo3}
          pointerEvents="none"
        />
      </All>
    );
  }
}

Router.register('Overlay', Page);

export default Page;
