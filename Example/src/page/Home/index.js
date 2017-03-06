/**
 * 主页面 rnx-ui 面板
 */
import React from 'react';
import {
  List,
} from 'BizComponent';
import Router from 'BizRouter';
import All from 'rnx-ui/All';
import NavBar from 'rnx-ui/NavBar';

const utils = ['TransPxToDp', 'Validator'];
const compException = ['Home'].concat(utils);
const genItem = key => ({ content: key, onPress: () => Router.open(key) });

const genItems = () => {
  const keys = Object.keys(Router.pages);

  const compTitle = {
    type: 'title',
    text: 'component',
  };
  const utilsTitle = {
    type: 'title',
    text: 'util',
  };

  const components = keys.filter(key => compException.indexOf(key) === -1);
  const compList = components.map(genItem);
  const utilList = utils.map(genItem);
  compList.unshift(compTitle);
  utilList.unshift(utilsTitle);

  return compList.concat(utilList);
};

function Page() {
  return (
    <All>
      <NavBar title="RNX UI" />
      <List items={genItems()} />
    </All>
  );
}

Router.register('Home', Page);

export default Page;
