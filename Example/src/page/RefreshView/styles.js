import { StyleSheet } from 'react-native';
import transPxToDp from 'rnx-ui/util/transPxToDp';

const COLOR_LIST_BORDER = '#C9C9C9';
const LOADER_SIZE = 20;
const POINTER_SIZE = 10;
const POINTER_GAP = (LOADER_SIZE - POINTER_SIZE) / 2;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomColor: COLOR_LIST_BORDER,
    borderBottomWidth: transPxToDp(1),
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  refreshControl: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  loader: {
    position: 'relative',
    width: LOADER_SIZE,
    height: LOADER_SIZE,
  },
  cicle: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: null,
    width: null,
  },
  pointer: {
    position: 'absolute',
    top: POINTER_GAP,
    left: POINTER_GAP,
    height: POINTER_SIZE,
    width: POINTER_SIZE,
  },
  loaderText: {
    marginTop: 5,
    fontSize: 10,
    color: '#333',
  },

  loadPromot: {
    textAlign: 'center',
    color: '#999',
    padding: 10,
  },
});

export default styles;
