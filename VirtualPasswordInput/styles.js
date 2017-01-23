import { StyleSheet } from 'react-native';
import {
  DP_FROM_1PX,
} from '../constant';

const BORDER_COLOR = '#ccc';

export default StyleSheet.create({
  all: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    borderWidth: DP_FROM_1PX,
    borderLeftWidth: 0,
    borderColor: BORDER_COLOR,
    flexDirection: 'row',
  },
  cell: {
    height: 40,
    width: 40,
    borderLeftWidth: DP_FROM_1PX,
    borderColor: BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secure: {
    width: 16,
    height: 16,
    backgroundColor: '#222',
    borderRadius: 8,
  },
});
