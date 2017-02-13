import {
  StyleSheet,
} from 'react-native';

const FONT_SIZE = 16;

const styles = StyleSheet.create({
  all: {
    height: 50,
    flex: 1,
    position: 'relative',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    fontSize: FONT_SIZE,
  },
  fill: {
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  fillHide: {
    left: 1000,
  },
  placeholder: {
    color: '#999',
    fontSize: FONT_SIZE,
  },
});

export default styles;
