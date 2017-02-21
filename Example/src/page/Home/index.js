/**
 * 主页面 rnx-ui 面板
 */
import React from 'react';
import All from 'rnx-ui/All';
import NavBar from 'rnx-ui/NavBar';
import {
  List,
} from 'BizComponent';
import Router from 'BizRouter';

const items = [
  {
    type: 'title',
    text: 'component',
  },
  {
    content: 'AddAndSubtract',
    onPress() {
      Router.open('AddAndSubtract');
    },
  },
  {
    content: 'Alert',
    onPress() {
      Router.open('Alert');
    },
  },
  {
    content: 'Badge',
    onPress() {
      Router.open('Badge');
    },
  },
  {
    content: 'Btn',
    onPress() {
      Router.open('Btn');
    },
  },
  {
    content: 'Drop',
    onPress() {
      Router.open('Drop');
    },
  },
  {
    content: 'HeaderedSheet',
    onPress() {
      Router.open('HeaderedSheet');
    },
  },
  {
    content: 'ImgHolder',
    onPress() {
      Router.open('ImgHolder');
    },
  },
  {
    content: 'KeyboardAdaptiveView',
    onPress() {
      Router.open('KeyboardAdaptiveView');
    },
  },
  {
    content: 'Loading',
    onPress() {
      Router.open('Loading');
    },
  },
  {
    content: 'NavBar',
    onPress() {
      Router.open('NavBar');
    },
  },
  {
    content: 'NumericKeyboard',
    onPress() {
      Router.open('NumericKeyboard');
    },
  },
  {
    content: 'Overlay',
    onPress() {
      Router.open('Overlay');
    },
  },
  {
    content: 'PhoneNumInput',
    onPress() {
      Router.open('PhoneNumInput');
    },
  },
  {
    content: 'RefreshView',
    onPress() {
      Router.open('RefreshView');
    },
  },
  {
    content: 'Sheet',
    onPress() {
      Router.open('Sheet');
    },
  },
  {
    content: 'SmsCaptchaInput',
    onPress() {
      Router.open('SmsCaptchaInput');
    },
  },
  {
    content: 'TabBar',
    onPress() {
      Router.open('TabBar');
    },
  },
  {
    content: 'ToolTip',
    onPress() {
      Router.open('ToolTip');
    },
  },
  {
    content: 'VirtualPasswordInput',
    onPress() {
      Router.open('VirtualPasswordInput');
    },
  },

  {
    type: 'title',
    text: 'util',
  },
  {
    content: 'TransPxToDp',
    onPress() {
      Router.open('TransPxToDp');
    },
  },
  {
    content: 'Validator',
    onPress() {
      Router.open('Validator');
    },
  },
];

function Page() {
  return (
    <All>
      <NavBar title="RNX UI" />
      <List items={items} />
    </All>
  );
}

Router.register('Home', Page);

export default Page;
