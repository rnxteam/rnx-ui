import {
  StyleSheet,
} from 'react-native';

const FONT_SIZE = 15;

const styles = StyleSheet.create({
  all: {
    height: 50,
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
  },
  value: {
    fontSize: FONT_SIZE,
  },
  placeholderContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  placeholderContainerHide: {
    left: 1000,
  },
  placeholder: {
    color: '#999',
    fontSize: FONT_SIZE,
  },
});

export default styles;
