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
  modal: {
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
        style={[styles.modal, this.props.modalStyle]}
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
  modalStyle: View.propTypes.style,
  // 菊花容器样式
  loaderStyle: View.propTypes.style,
  // 菊花图标的颜色
  color: ActivityIndicator.propTypes.color,
  // 菊花图标的大小
  size: ActivityIndicator.propTypes.size,
};
Loading.defaultProps = {
  visible: false,
  modalStyle: null,
  loaderStyle: null,
  color: '#fff',
  size: 'small',
};

export default Loading;
