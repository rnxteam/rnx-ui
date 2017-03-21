import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Alert,
} from 'react-native';
import Router from 'BizRouter';
import {
  List,
  Icon,
} from 'BizComponent';
import All from 'rnx-ui/All';
import NavBar from 'rnx-ui/NavBar';
import Badge from 'rnx-ui/Badge';

function generateMsgCount() {
  return Math.floor(Math.random() * 200);
}

function formatMsgCount() {
  const msgCount = generateMsgCount();
  let text = `${msgCount}`;
  if (msgCount === 0) {
    text = '';
  } else if (msgCount > 99) {
    text = '99+';
  }
  return text;
}


const items = [
  {
    content: '切换为长标题',
    onPress() {
      this.setState({
        title: '这是一个很长很长很长很长很长很长的标题',
      });
    },
  },
  {
    content: '随机设置未读消息',
    onPress() {
      this.setState({
        msgCount: formatMsgCount(),
      });
    },
  },
];

const COLOR_NAVBAR_TEXT = '#fff';
const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'pink',
  },
  title: {
    color: 'black',
  },
  leftBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    color: COLOR_NAVBAR_TEXT,
  },
  leftBtnText: {
    marginLeft: 5,
    color: COLOR_NAVBAR_TEXT,
  },
  rightIcon: {
    color: COLOR_NAVBAR_TEXT,
    fontSize: 20,
  },
});

class Page extends Component {
  static section = 'Navigation';

  constructor(props) {
    super(props);
    this.state = {
      title: 'navbar',
      msgCount: '6',
    };
  }
  render() {
    return (
      <All>
        <NavBar
          style={styles.navBar}
          title={this.state.title}
          titleStyle={styles.title}
          leftBtn="返回"
          leftEvent={() => {
            Router.back();
          }}
          rightBtn={
            <Badge text={this.state.msgCount}>
              <Icon name="commenting-o" style={styles.rightIcon} />
            </Badge>
          }
          rightEvent={() => {
            Alert.alert('清空');
            this.setState({
              msgCount: '',
            });
          }}
        />
        <List
          items={items}
          pressContext={this}
        />
      </All>
    );
  }
}

Router.register('NavBar', Page);

export default Page;
