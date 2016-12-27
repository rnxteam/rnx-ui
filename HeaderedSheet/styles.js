import {
  StyleSheet,
} from 'react-native';
import transPxToDp from '../util/transPxToDp';

const HEADER_HEIGHT = 45;
const SIDE_GAP = 10;
const COLOR_PRESSABLE = '#157efb';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: SIDE_GAP,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: 'transparent',
    height: HEADER_HEIGHT,
    borderBottomWidth: transPxToDp(1),
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
  btnText: {
    color: COLOR_PRESSABLE,
  },
});

export default styles;
