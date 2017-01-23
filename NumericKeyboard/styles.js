import {
  StyleSheet,
} from 'react-native';

const BORDER_WIDTH = StyleSheet.hairlineWidth;
const BORDER_COLOR = '#a5a5a5';
const LINE_HEIGHT = 48;
export const BG_COLOR = '#d2d5dc';

export default StyleSheet.create({
  all: {
    backgroundColor: '#fff',
    height: 216,
  },
  line: {
    borderTopWidth: BORDER_WIDTH,
    borderColor: BORDER_COLOR,
    flexDirection: 'row',
    height: LINE_HEIGHT,
    flex: 1,
  },
});
