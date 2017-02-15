import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  all: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  item: {
    width: 60,
    height: 60,
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 10,
    marginBottom: 10,
  },
  adderBtn: {
    backgroundColor: '#e9e9e9',
  },
  adderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adderText: {
    color: '#d0d0d0',
    fontSize: 40,
    marginTop: -5,
  },
});

export default styles;
