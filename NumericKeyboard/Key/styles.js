import {
  StyleSheet,
} from 'react-native';

const BORDER_WIDTH = StyleSheet.hairlineWidth;
const BORDER_COLOR = '#a5a5a5';
const DISABLED_COLOR = '#d2d5dc';

export default StyleSheet.create({
  btn: {
    flex: 1,
  },
  key: {
    borderLeftWidth: BORDER_WIDTH,
    borderColor: BORDER_COLOR,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstKeyInLine: {
    borderLeftWidth: 0,
  },
  disabledKey: {
    backgroundColor: DISABLED_COLOR,
  },
  text: {
    fontSize: 28,
  },
});

export {
  DISABLED_COLOR,
};
