/**
 * 菊花加载中组件
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';

import Overlay from '../Overlay';

const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  loader: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
});

class Loading extends Component {
  render() {
    return (
      <Overlay
        visible={this.props.visible}
        style={[styles.overlay, this.props.overlayStyle]}
        useAnimation={this.props.useOverlayAnimation}
        duration={this.props.overlayAnimationDuration}
        onShow={this.props.onShow}
        onHide={this.props.onHide}
      >
        <View style={[styles.loader, this.props.loaderStyle]}>
          <ActivityIndicator
            animating
            color={this.props.color}
            size={this.props.size}
          />
        </View>
      </Overlay>
    );
  }
}

Loading.propTypes = {
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 遮罩层样式
  overlayStyle: View.propTypes.style,
  // 菊花容器样式
  loaderStyle: View.propTypes.style,
  // 菊花图标的颜色
  color: ActivityIndicator.propTypes.color,
  // 菊花图标的大小
  size: ActivityIndicator.propTypes.size,
  // 是否使用 Overlay 动画
  useOverlayAnimation: PropTypes.bool,
  // Overlay 动画时长
  overlayAnimationDuration: PropTypes.number,
  // 显示回调
  onShow: PropTypes.func,
  // 隐藏回调
  onHide: PropTypes.func,
};
Loading.defaultProps = {
  visible: false,
  overlayStyle: null,
  loaderStyle: null,
  color: '#fff',
  size: 'small',
};

export default Loading;
