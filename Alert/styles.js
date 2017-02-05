import {
  StyleSheet,
} from 'react-native';
import {
  COLOR_SYSTEM,
  COLOR_BORDER,
  HAIRLINE_WIDTH,
} from '../constant';

const BORDER_RADIUS = 10;

export default StyleSheet.create({
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alert: {
    width: 280,
    borderRadius: BORDER_RADIUS,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  content: {
    padding: 20,
  },
  titleContainer: {
    marginBottom: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  message: {
    textAlign: 'center',
    lineHeight: 16,
  },
  btnsContainer: {
    flexDirection: 'row',
    borderTopWidth: HAIRLINE_WIDTH,
    borderColor: COLOR_BORDER,
    height: 45,
  },
  btn: {
    flex: 1,
    borderLeftWidth: HAIRLINE_WIDTH,
    borderColor: COLOR_BORDER,
  },
  btnFirst: {
    borderLeftWidth: 0,
  },
  btnTouchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  // for android
  btnTouchableFirst: {
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  // for android
  btnTouchableLast: {
    borderBottomRightRadius: BORDER_RADIUS,
  },
  btnText: {
    color: COLOR_SYSTEM,
    fontSize: 17,
  },
});
