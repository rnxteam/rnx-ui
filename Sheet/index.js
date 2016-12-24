import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
  Animated,
} from 'react-native';

import Overlay from '../Overlay';

const NOOP = () => {};

const styles = StyleSheet.create({
  modal: {
    position: 'relative',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 0,
  },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
});

class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
    };

    this.animDistance = new Animated.Value(0);
    this.height = null;

    this.getHeight = this.getHeight.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.visible && !this.state.visible) {
      // 隐藏 -> 显示
      this.setState({
        visible: true,
      });
      this.show(props);
    } else if (!props.visible && this.state.visible) {
      // 显示 -> 隐藏
      this.hide(props);
    }
  }

  getHeight(e) {
    const { height } = e.nativeEvent.layout;
    this.height = height;
  }

  animated(targetPositon, cb = NOOP) {
    Animated.timing(this.animDistance, {
      toValue: targetPositon,
      duration: this.props.duration,
    }).start(() => {
      cb();
    });
  }

  show() {
    if (this.height === null) {
      // 如果组件还未渲染，等待，再次尝试
      setTimeout(() => {
        this.show();
      }, 10);
    } else {
      this.animated(-this.height);
    }
  }

  hide() {
    this.animated(0, () => {
      this.setState({
        visible: false,
      });
      this.props.onClose();
    });
  }

  render() {
    return (
      <Overlay
        visible={this.state.visible}
        style={[styles.modal, this.props.modalStyle]}
        onPress={this.props.onPressModal}
      >
        <View style={styles.container}>
          <Animated.View
            style={[styles.sheet, {
              top: this.animDistance,
            }, this.props.style]}
            onLayout={this.getHeight}
          >
            {this.props.children}
          </Animated.View>
        </View>
      </Overlay>
    );
  }
}

Sheet.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 遮罩层样式
  modalStyle: View.propTypes.style,
  // 关闭回调（动画结束时）
  onClose: PropTypes.func,
  // 遮罩点击事件
  onPressModal: PropTypes.func,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 动画时长
  duration: PropTypes.number,
};
Sheet.defaultProps = {
  style: null,
  visible: false,
  modalStyle: null,
  onClose: NOOP,
  onPressModal: NOOP,
  children: null,
  duration: 200,
};

export default Sheet;
