import {
  StyleSheet,
} from 'react-native';

const COLOR = 'red';

const CIRCLE = {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
};

const TEXT = {
  fontSize: 20,
  marginTop: -3,
  fontWeight: 'bold',
  backgroundColor: 'transparent',
};

export default StyleSheet.create({
  all: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  btn: {
    overflow: 'hidden',
  },
  adder: {
    ...CIRCLE,
    backgroundColor: COLOR,
  },
  subtracterWrapper: {
    position: 'absolute',
    right: 0,
  },
  subtracter: {
    ...CIRCLE,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: COLOR,
  },
  adderText: {
    ...TEXT,
    color: '#fff',
  },
  subtracterText: {
    ...TEXT,
    color: COLOR,
  },
  text: {
    alignItems: 'center',
  },
});
