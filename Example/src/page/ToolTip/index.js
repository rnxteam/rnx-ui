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
import ToolTip from 'rnx-ui/ToolTip';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
  },
  textWrapper: {
    borderRadius: 0,
    backgroundColor: 'yellow',
  },
  text: {
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
  {
    content: '无 Overlay 动画',
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
    setTimeout(() => {
      state[`demo${index}`] = false;
      this.setState(state);
    }, 2000);
  }

  render() {
    return (
      <All>
        <NavBar title="ToolTip" />
        <List
          items={items}
          pressContext={this}
        />
        <ToolTip
          visible={this.state.demo0}
          text="默认"
        />
        <ToolTip
          visible={this.state.demo1}
          text="自定义"
          overlayStyle={styles.overlay}
          textWrapperStyle={styles.textWrapper}
          textStyle={styles.text}
          pointerEvents="auto"
          overlayAnimationDuration={1000}
          onShow={this.onShow}
          onHide={this.onHide}
        />
        <ToolTip
          visible={this.state.demo2}
          text="无 Overlay 动画"
          useAnimation={false}
        />
      </All>
    );
  }
}

Router.register('ToolTip', Page);

export default Page;
