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
  {
    content: '无动画',
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
    this.onBtnPress = this.onBtnPress.bind(this);
  }

  onOverlayPress() {
    /* eslint-disable */
    console.log('press overlay');
    /* eslint-enable */
  }
  onBtnPress() {
    this.setState({
      demo1: false,
    });
  }
  onShow() {
    /* eslint-disable */
    console.log('onShow');
    /* eslint-enable */
  }
  onHide() {
    /* eslint-disable */
    console.log('onHide');
    /* eslint-enable */
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
      </All>
    );
  }
}

Router.register('Overlay', Page);

export default Page;
