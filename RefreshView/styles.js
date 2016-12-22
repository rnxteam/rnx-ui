import { StyleSheet } from 'react-native';

const SCROLLBAR_GAP_EDGE = 3; // 滚动条距离边界的距离（平行）

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  inner: {
    position: 'relative',
  },
  refreshControlContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  scrollBarContainer: {
    position: 'absolute',
    top: SCROLLBAR_GAP_EDGE,
    bottom: SCROLLBAR_GAP_EDGE,
    right: 2,
    width: 0,
  },
  scrollBar: {
    width: 3,
    position: 'absolute',
    top: 0,
    right: 0,
    height: 50,
    borderRadius: 1.5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export default styles;
