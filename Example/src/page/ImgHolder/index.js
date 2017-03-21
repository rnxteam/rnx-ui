import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import {
  Article,
  NavBar,
} from 'BizComponent';
import Router from 'BizRouter';
import All from 'rnx-ui/All';
import ImgHolder from 'rnx-ui/ImgHolder';

const IMG_URI = 'https://raw.githubusercontent.com/dragonwong/excited/master/img/dark_power.jpg?t=';
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
  }
  makeImgUri() {
    const timestamp = +new Date();
    return `${IMG_URI}${timestamp}`;
  }

  render() {
    return (
      <All>
        <NavBar title="Badge" />
        <ScrollView style={styles.scrollView}>
          <Article>
            <View style={styles.container}>
              <ImgHolder
                style={styles.imgHolder}
                holder={this.placeholder}
                source={{
                  uri: this.state.imgUri,
                }}
              />
            </View>
          </Article>
          <Article>
            <View style={styles.container}>
              <ImgHolder
                style={[styles.imgHolder, {
                  width: 100,
                }]}
                holder={this.placeholder}
                source={{
                  uri: this.state.imgUri,
                }}
              />
            </View>
          </Article>
        </ScrollView>
      </All>
    );
  }
}

Router.register('ImgHolder', Page);

export default Page;
