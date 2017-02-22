import React, {
  PropTypes,
} from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  Emitter,
} from 'rnx-ui/Drop';
import Cart from '../Cart';

const NOOP = () => {};

const styles = StyleSheet.create({
  all: {
    borderRadius: 12.5,
    width: 25,
    overflow: 'hidden',
  },
});

function CartEmitter(props) {
  return (
    <Emitter
      ref={this.getEl}
      style={styles.all}
      onPress={props.onPress}
    >
      <Cart />
    </Emitter>
  );
}

CartEmitter.propTypes = {
  onPress: PropTypes.func,
};
CartEmitter.defaultProps = {
  onPress: NOOP,
};

export default CartEmitter;
