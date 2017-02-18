import {
  StyleSheet,
} from 'react-native';
import {
  HAIRLINE_WIDTH,
} from '../constant';

const HEADER_HEIGHT = 45;
const SIDE_GAP = 10;
const COLOR_PRESSABLE = '#157efb';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: 'transparent',
    height: HEADER_HEIGHT,
    borderBottomWidth: HAIRLINE_WIDTH,
    borderBottomColor: '#ddd',
  },
  titleWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  title: {
    textAlign: 'center',
  },
  btn: {
    justifyContent: 'center',
    flex: 1,
  },
  btnText: {
    color: COLOR_PRESSABLE,
    marginHorizontal: SIDE_GAP,
  },
});

export default styles;
