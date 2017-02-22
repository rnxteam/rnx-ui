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
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    fontSize: 12,
    color: '#666',
  },
});


function ListItemTitle(props) {
  return (
    <View style={styles.all}>
      <Text
        style={styles.text}
      >
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
