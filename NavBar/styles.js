import {
  StyleSheet,
} from 'react-native';

const SIDE_GAP = 10;
const COLOR = '#fff';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#2F3549',
    position: 'relative',
  },
  header: {
    paddingHorizontal: SIDE_GAP,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: 'transparent',
  },
  headerItemCenter: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  headerTextCenter: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: COLOR,
  },
});

export default styles;
