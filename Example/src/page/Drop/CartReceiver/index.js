import React, {
  PropTypes,
} from 'react';
import {
  StyleSheet,
} from 'react-native';
import Badge from 'rnx-ui/Badge';
import {
  Receiver,
} from 'rnx-ui/Drop';
import Cart from '../Cart';

const NOOP = () => {};

const styles = StyleSheet.create({
  all: {
    position: 'absolute',
    left: 65,
    bottom: 65,
  },
  textContainer: {
    right: 5,
    top: 5,
  },
  cart: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

function CartReceiver(props) {
  return (
    <Receiver
      getEl={props.getEl}
      getCenterPosition={props.getCenterPosition}
      style={styles.all}
    >
      <Badge
        text={props.count}
        textContainerStyle={styles.textContainer}
      >
        <Cart
          style={styles.cart}
          iconStyle={styles.icon}
        />
      </Badge>
    </Receiver>
  );
}

CartReceiver.propTypes = {
  count: Badge.propTypes.text,
  getCenterPosition: Receiver.propTypes.getCenterPosition,
  // 获取元素
  getEl: PropTypes.func,
};
CartReceiver.defaultProps = {
  count: '',
  getCenterPosition: NOOP,
  getEl: NOOP,
};

export default CartReceiver;
