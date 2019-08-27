import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import All from 'rnx-ui/All';
import ImgPicker from 'rnx-ui/ImgPicker';
import {
  NavBar,
  Icon,
} from '../../component';
import Router from '../../router';

const styles = StyleSheet.create({
  imgPicker: {
    marginLeft: 10,
  },
  imgPickerItem: {
    width: 100,
    height: 100,
  },
  imgPickerAdder: {
    color: '#d0d0d0',
    fontSize: 18,
  },
  imgPickerDeleterIcon: {
    color: '#fff',
    fontSize: 8,
  },
});

const MAX_PHOTOS_NUMBER = 2;
const IMAGE_URI = 'http://tva1.sinaimg.cn/crop.0.0.217.217.180/4c8b519djw8fa45br0vpxj2062062q33.jpg';

class Page extends Component {
  static section = 'Data Entry';

  constructor(props) {
    super(props);
    this.state = {
      images0: [],
      images1: [IMAGE_URI],
    };
    this.add0 = this.add0.bind(this);
    this.add1 = this.add1.bind(this);
    this.remove0 = this.remove0.bind(this);
    this.remove1 = this.remove1.bind(this);
  }

  add0() {
    this.setState({
      images0: this.state.images0.concat(IMAGE_URI),
    });
  }
  add1() {
    this.setState({
      images1: this.state.images1.concat(IMAGE_URI),
    });
  }

  remove0(uri, index) {
    this.state.images0.splice(index, 1);
    const images0 = this.state.images0;
    this.setState({
      images0,
    });
  }
  remove1(uri, index) {
    this.state.images1.splice(index, 1);
    const images1 = this.state.images1;
    this.setState({
      images1,
    });
  }

  render() {
    return (
      <All>
        <NavBar title="ImgPicker" />
        <ScrollView
          contentContainerStyle={{
            paddingTop: 10,
          }}
        >
          <ImgPicker
            style={styles.imgPicker}
            images={this.state.images0}
            imgDisplayerProps={{
              onDeleterPress: this.remove0,
            }}
            onAdderPress={this.add0}
          />
          <ImgPicker
            style={styles.imgPicker}
            itemStyle={styles.imgPickerItem}
            images={this.state.images1}
            adder={
              <Icon name="fa-plus" style={styles.imgPickerAdder} />
            }
            adderVisible={this.state.images1.length < MAX_PHOTOS_NUMBER}
            imgDisplayerProps={{
              onImgPress: (uri, index) => {
                Alert.alert(`Image NO.${index + 1}: ${uri}`);
              },
              deleter: (
                <Icon name="fa-minus" style={styles.imgPickerDeleterIcon} />
              ),
              onDeleterPress: this.remove1,
            }}
            onAdderPress={this.add1}
          />
        </ScrollView>
      </All>
    );
  }
}

Router.register('ImgPicker', Page);

export default Page;
