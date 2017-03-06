import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  all: {
    position: 'relative',
  },
  btn: {
    flex: 1,
  },
  img: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: null,
    width: null,
    borderRadius: 5,
  },
  deleter: {
    position: 'absolute',
    top: -10,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleterText: {
    color: '#fff',
    marginTop: -2,
  },
});

export default styles;
