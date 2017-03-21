import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import All from 'rnx-ui/All';
import AddAndSubtract from 'rnx-ui/AddAndSubtract';
import {
  NavBar,
  Article,
  Icon,
} from 'BizComponent';
import Easing from 'Easing';
import Router from 'BizRouter';

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
  },
  text: {
    color: 'blue',
  },
});

class Page extends Component {
  static section = 'Data Entry';

  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    this.setState({
      num: this.state.num + 1,
    });
  }

  subtract() {
    const num = this.state.num;
    if (num > 0) {
      this.setState({
        num: num - 1,
      });
    }
  }

  render() {
    return (
      <All>
        <NavBar title="NumericKeyboard" />
        <ScrollView style={styles.scrollView}>
          <Article title="默认">
            <AddAndSubtract
              num={this.state.num}
              onPressAdder={this.add}
              onPressSubtracter={this.subtract}
            />
          </Article>
          <Article title="自定义">
            <AddAndSubtract
              num={this.state.num}
              onPressAdder={this.add}
              onPressSubtracter={this.subtract}
              duration={350}
              distance={40}
              deg={360}
              easing={Easing.elastic(1)}
              btnWidth={20}
              adderStyle={{
                backgroundColor: 'blue',
              }}
              subtracterStyle={{
                borderColor: 'blue',
              }}
              textStyle={styles.text}
              adder={
                <Icon
                  name="fa-plus"
                  style={{
                    color: '#fff',
                    fontSize: 14,
                    marginBottom: -1,
                  }}
                />
              }
              subtracter={
                <Icon
                  name="fa-minus"
                  style={{
                    color: 'blue',
                    fontSize: 14,
                    marginBottom: -1,
                  }}
                />
              }
            />
          </Article>
        </ScrollView>
      </All>
    );
  }
}

Router.register('AddAndSubtract', Page);

export default Page;
