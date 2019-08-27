import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Icon,
} from '../../../component';

const styles = StyleSheet.create({
  all: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    backgroundColor: '#FF5200',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 12,
    color: '#fff',
  },
});

class Cart extends Component {
  constructor(props) {
    super(props);
    this.getEl = this.getEl.bind(this);
  }

  getEl(el) {
    this.el = el;
  }

  render() {
    return (
      <View style={[styles.all, this.props.style]}>
        <Icon
          name="cart"
          style={[styles.icon, this.props.iconStyle]}
        />
      </View>
    );
  }
}

Cart.propTypes = {
  style: View.propTypes.style,
  iconStyle: Icon.propTypes.style,
};
Cart.defaultProps = {
  style: null,
  iconStyle: null,
};

export default Cart;
