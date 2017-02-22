import React, { Component } from 'react';
import Router from 'BizRouter';
import All from 'rnx-ui/All';
import ImgRollView from 'rnx-ui/ImgRollView';
import { NavBar } from 'BizComponent';

class Page extends Component {
  render() {
    return (
      <All>
        <NavBar title="Badge" />
        <ImgRollView />
      </All>
    );
  }
}

Router.register('ImgRollView', Page);

export default Page;
