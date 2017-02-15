import {
  StyleSheet,
} from 'react-native';
import {
  COLOR_SYSTEM,
} from '../constant';

const BORDER_RADIUS = 12;

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
  },
  btnList: {
    marginBottom: 7,
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
  },
  btn: {
    flex: 1,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: StyleSheet.hairlineWidth,
  },
  // for android
  btnFirst: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
  // for android
  btnLast: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  btnText: {
    color: COLOR_SYSTEM,
    fontSize: 20,
  },
  cancelBtn: {
    borderRadius: BORDER_RADIUS,
  },
  cancelBtnText: {
    fontWeight: 'bold',
  },
});

export default styles;
