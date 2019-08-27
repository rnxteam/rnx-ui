import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import All from 'rnx-ui/All';
import ImgHolder from 'rnx-ui/ImgHolder';
import Btn from 'rnx-ui/Btn';

import {
  Article,
  NavBar,
} from '../../component';
import Router from '../../router';

// const IMG_URI = 'https://raw.githubusercontent.com/dragonwong/excited/master/img/dark_power.jpg?t=';
const IMG_URI = 'http://img.t.sinajs.cn/t6/style/images/global_nav/WB_logo-x2.png?id=1404211047727&t=';
const styles = StyleSheet.create({
  imgHolder: {
    height: 200,
  },
});

class Page extends Component {
  static section = 'Data Display';

  constructor(props) {
    super(props);

    this.state = {
      imgUri: this.makeImgUri(),
    };

    this.placeholder = (
      <Text>{'I\'m a placeholder.'}</Text>
    );

    this.changeImg = this.changeImg.bind(this);
  }
  makeImgUri() {
    const timestamp = +new Date();
    return `${IMG_URI}${timestamp}`;
  }
  changeImg() {
    this.setState({
      imgUri: this.makeImgUri(),
    });
  }

  render() {
    return (
      <All>
        <NavBar title="ImgHolder" />
        <ScrollView style={styles.scrollView}>
          <Btn onPress={this.changeImg}>
            重新加载图片
          </Btn>
          <Article
            title="默认"
          >
            <ImgHolder
              style={styles.imgHolder}
              holder={this.placeholder}
              source={{
                uri: this.state.imgUri,
              }}
            />
          </Article>
          <Article
            title="加载完成自动移除 holder"
          >
            <ImgHolder
              style={[styles.imgHolder, {
                width: 100,
              }]}
              holder={this.placeholder}
              source={{
                uri: this.state.imgUri,
              }}
              autoRemoveHolder
            />
          </Article>
        </ScrollView>
      </All>
    );
  }
}

Router.register('ImgHolder', Page);

export default Page;
