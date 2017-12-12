import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  Article,
  NavBar,
} from 'BizComponent';
import Router from 'BizRouter';
import All from 'rnx-ui/All';
import Progress from 'rnx-ui/Progress';
import Btn from 'rnx-ui/Btn';

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
  },
  btn: {
    marginTop: 5,
  },
  outer: {
    backgroundColor: 'yellow',
  },
  inner: {
    backgroundColor: 'red',
  },
});

const INTERVAL = 200;

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress1: 0,
      progress2: 0,
      disabled: false,
    };

    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.startAutoAdd = this.startAutoAdd.bind(this);
    this.startAutoSub = this.startAutoSub.bind(this);
  }

  add() {
    this.setState({
      progress1: this.state.progress1 + 0.1,
    });
  }
  sub() {
    this.setState({
      progress1: this.state.progress1 - 0.1,
    });
  }

  startAutoAdd() {
    this.setState({
      disabled: true,
    });
    this.autoAddId = setInterval(() => {
      if (this.state.progress2 > 1) {
        clearInterval(this.autoAddId);
        this.setState({
          disabled: false,
        });
        return;
      }
      this.setState({
        progress2: this.state.progress2 + (Math.random() / 5),
      });
    }, INTERVAL);
  }
  startAutoSub() {
    this.setState({
      disabled: true,
    });
    this.autoSubId = setInterval(() => {
      if (this.state.progress2 < 0) {
        clearInterval(this.autoSubId);
        this.setState({
          disabled: false,
        });
        return;
      }
      this.setState({
        progress2: this.state.progress2 - (Math.random() / 5),
      });
    }, INTERVAL);
  }

  render() {
    return (
      <All>
        <NavBar title="Progress" />
        <ScrollView style={styles.scrollView}>
          <Article title="手动控制">
            <Progress value={this.state.progress1} />
            <Btn
              style={styles.btn}
              onPress={this.add}
            >
              增加 10%
            </Btn>
            <Btn
              style={styles.btn}
              onPress={this.sub}
            >
              减少 10%
            </Btn>
          </Article>
          <Article title="自动控制">
            <Progress value={this.state.progress2} />
            <Btn
              style={styles.btn}
              onPress={this.startAutoAdd}
              disabled={this.state.disabled}
            >
              开始增加
            </Btn>
            <Btn
              style={styles.btn}
              onPress={this.startAutoSub}
              disabled={this.state.disabled}
            >
              开始减少
            </Btn>
          </Article>
          <Article title="自定义">
            <Progress
              value={0.75}
              valueVisible={false}
              width={20}
              outerStyle={styles.outer}
              innerStyle={styles.inner}
            />
          </Article>
        </ScrollView>
      </All>
    );
  }
}

Page.section = 'Feedback';

Router.register('Progress', Page);

export default Page;
