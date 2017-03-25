import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Router from 'BizRouter';
import {
  NavBar,
  List,
} from 'BizComponent';
import All from 'rnx-ui/All';
import NumericKeyboard from 'rnx-ui/NumericKeyboard';
import Sheet from 'rnx-ui/Sheet';

const styles = StyleSheet.create({
  textView: {
    padding: 10,
  },
  numericKeyboard: {
    height: 300,
  },
});

const items = [
  {
    content: '和 Sheet 一起用的自定义高度的 NumericKeyboard',
    onPress() {
      this.show(0);
    },
  },
];

class Page extends Component {
  static section = 'Data Entry';

  constructor(props) {
    super(props);
    this.state = {
      demo0: false,
      text: '',
    };
    this.onPressDemo0 = this.onPressDemo0.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  onPressDemo0() {
    this.setState({
      demo0: false,
    });
  }

  onInput(value) {
    const text = this.state.text;
    if (value === 'DELETE') {
      if (text.length) {
        this.setState({
          text: text.substr(0, text.length - 1),
        });
      }
    } else {
      this.setState({
        text: text + value,
      });
    }
  }

  show(index) {
    const state = {};
    state[`demo${index}`] = true;
    this.setState(state);
  }

  render() {
    return (
      <All>
        <NavBar title="NumericKeyboard" />
        <View style={styles.textView}>
          <Text>{this.state.text}</Text>
        </View>
        <List
          items={items}
          pressContext={this}
        />
        <NumericKeyboard
          onPress={this.onInput}
        />
        <Sheet
          visible={this.state.demo0}
          onPressOverlay={this.onPressDemo0}
        >
          <NumericKeyboard
            onPress={this.onInput}
            deleteKeyContent="DEL"
            style={styles.numericKeyboard}
          />
        </Sheet>
      </All>
    );
  }
}

Router.register('NumericKeyboard', Page);

export default Page;
