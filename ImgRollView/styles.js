import { StyleSheet } from 'react-native';

const TICK = {
  position: 'absolute',
  right: 5,
  top: 5,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  selectTick: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,.3)',
    ...TICK,
  },
  selectedTick: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FF5200',
    ...TICK,
  },
  tickInner: {
    color: '#fff',
  },
});
