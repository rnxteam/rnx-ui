/**
 * 临时页面：购物车动画测试页
 */
import React, {
  Component,
} from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import {
  NavBar,
} from 'BizComponent';
import Router from 'BizRouter';
import All from 'rnx-ui/All';
import PropTypes from 'prop-types';

import CartEmitter from './CartEmitter';
import CartReceiver from './CartReceiver';
import {
  DropperDefault,
  DropperImg,
  DropperScale,
  DropperNoRotate,
  DropperDuration,
  DropperJumpHeight,
  DropperNoEndAnimation,
} from './Droppers';

import styles from './styles';

const NOOP = () => {};
const LIST_LEN = 10;

function ListItem(props) {
  return (
    <View style={styles.listItem}>
      <CartEmitter onPress={props.onPress} />
      <CartEmitter onPress={props.onPress} />
      <CartEmitter onPress={props.onPress} />
      <CartEmitter onPress={props.onPress} />
    </View>
  );
}

ListItem.propTypes = {
  onPress: PropTypes.func,
};
ListItem.defaultProps = {
  onPress: NOOP,
};

class Page extends Component {
  static section = 'Feedback';

  constructor(props) {
    super(props);
    this.list = new Array(LIST_LEN).fill();
    this.state = {
      droppers: [],
      count: 0,
    };
    this.droppers = [];
    this.endPosition = null;

    this.onPress = this.onPress.bind(this);
    this.getCenterPosition = this.getCenterPosition.bind(this);
    this.makeDropper = this.makeDropper.bind(this);
    this.getCartReceiver = this.getCartReceiver.bind(this);
    this.cartReceiverShake = this.cartReceiverShake.bind(this);
  }

  onPress(position) {
    if (!this.endPosition) {
      return;
    }
    this.droppers.push(position);
    this.setState({
      droppers: this.droppers,
    });
  }

  getCartReceiver(el) {
    this.cartReceiver = el;
  }

  getCenterPosition(position) {
    this.endPosition = position;
  }

  cartReceiverShake() {
    if (this.cartReceiver) {
      this.cartReceiver.animate();
    }
    this.setState({
      count: this.state.count + 1,
    });
  }


  makeDropper(item, index) {
    const controller = index % 8;

    switch (controller) {
      case 1: {
        return (
          <DropperImg
            key={index}
            startPosition={item}
            endPosition={this.endPosition}
            onEnd={this.cartReceiverShake}
          />
        );
      }
      case 2: {
        return (
          <DropperScale
            key={index}
            startPosition={item}
            endPosition={this.endPosition}
            onEnd={this.cartReceiverShake}
            scale={0.5}
          />
        );
      }
      case 3: {
        return (
          <DropperNoRotate
            key={index}
            startPosition={item}
            endPosition={this.endPosition}
            onEnd={this.cartReceiverShake}
            rotate={0}
          />
        );
      }
      case 4: {
        return (
          <DropperDuration
            key={index}
            startPosition={item}
            endPosition={this.endPosition}
            onEnd={this.cartReceiverShake}
            duration={3000}
          />
        );
      }
      case 5: {
        return (
          <DropperDuration
            key={index}
            startPosition={item}
            endPosition={this.endPosition}
            onEnd={this.cartReceiverShake}
            duration={700}
          />
        );
      }
      case 6: {
        return (
          <DropperJumpHeight
            key={index}
            startPosition={item}
            endPosition={this.endPosition}
            onEnd={this.cartReceiverShake}
            jumpHeight={120}
          />
        );
      }
      case 7: {
        return (
          <DropperNoEndAnimation
            key={index}
            startPosition={item}
            endPosition={this.endPosition}
            onEnd={this.cartReceiverShake}
            endAnimation={false}
          />
        );
      }
      default: {
        return (
          <DropperDefault
            key={index}
            startPosition={item}
            endPosition={this.endPosition}
            onEnd={this.cartReceiverShake}
          />
        );
      }
    }
  }

  render() {
    return (
      <All>
        <NavBar title="Drop" />
        <ScrollView style={styles.scrollView}>
          {
            this.list.map((item, index) => (
              <ListItem key={index} onPress={this.onPress} />
            ))
          }
        </ScrollView>
        {
          this.state.droppers.map(this.makeDropper)
        }
        <CartReceiver
          count={this.state.count}
          getEl={this.getCartReceiver}
          getCenterPosition={this.getCenterPosition}
        />
      </All>
    );
  }
}

Router.register('Drop', Page);

export default Page;
