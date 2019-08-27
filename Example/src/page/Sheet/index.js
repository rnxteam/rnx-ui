import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import All from 'rnx-ui/All';
import Sheet from 'rnx-ui/Sheet';
import Btn from 'rnx-ui/Btn';

import {
  NavBar,
  List,
} from '../../component';
import Router from '../../router';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
  },
  demo0: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  demo1: {
    backgroundColor: '#fff',
    height: 300,
  },
  demo1TextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    this.onPressDemo0 = this.onPressDemo0.bind(this);
    this.onPressDemo1 = this.onPressDemo1.bind(this);
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

  onPressDemo0() {
    this.setState({
      demo0: false,
    });
  }
  onPressDemo1() {
    this.setState({
      demo1: false,
    });
  }

  show(index) {
    const state = {};
    state[`demo${index}`] = true;
    this.setState(state);
  }

  render() {
    return (
      <All>
        <NavBar title="Sheet" />
        <List
          items={items}
          pressContext={this}
        />
        <Sheet
          visible={this.state.demo0}
          onPressOverlay={this.onPressDemo0}
        >
          <View style={styles.demo0}>
            <Text>
              点击消失
            </Text>
          </View>
        </Sheet>
        <Sheet
          visible={this.state.demo1}
          overlayStyle={styles.overlay}
          onPressOverlay={this.onPressDemo1}
          onShow={this.onShow}
          onHide={this.onHide}
        >
          <View style={styles.demo1}>
            <View style={styles.demo1TextContainer}>
              <Text>
                自定义内容
              </Text>
            </View>
            <Btn
              onPress={this.onPressDemo1}
            >
            点我消失
            </Btn>
          </View>
        </Sheet>
      </All>
    );
  }
}

Router.register('Sheet', Page);

export default Page;
