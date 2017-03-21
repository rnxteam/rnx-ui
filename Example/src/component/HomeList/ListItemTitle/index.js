import React, {
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  all: {
    backgroundColor: '#f2f5fb',
    padding: 10,
    borderBottomColor: '#C9C9C9',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
});


function ListItemTitle(props) {
  return (
    <View style={styles.all}>
      <Text style={styles.text}>
        {props.text}
      </Text>
    </View>
  );
}

ListItemTitle.propTypes = {
  text: PropTypes.string,
};
ListItemTitle.defaultProps = {
  text: '',
};

export default ListItemTitle;
