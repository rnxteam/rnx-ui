/**
 * 遮罩层
 */
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const NOOP = () => {};

const styles = StyleSheet.create({
  all: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  innerView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

class Overlay extends Component {
  constructor(props) {
    super(props);

    const visible = props.visible;

    this.state = {
      visible,
      opacity: new Animated.Value(visible ? 1 : 0),
    };

    this.aniShow = Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: props.duration,
    });
    this.aniHide = Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: props.duration,
    });
  }

  componentWillReceiveProps(props) {
    if (props.visible && !this.props.visible) {
      // 隐藏 -> 显示
      this.show();
    } else if (!props.visible && this.props.visible) {
      // 显示 -> 隐藏
      this.hide();
    }
  }

  // 显示
  show() {
    if (this.props.useAnimation) {
      this.aniHide.stop();
    }

    this.setState({
      visible: true,
    });

    if (this.props.useAnimation) {
      this.aniShow.start(() => {
        this.props.onShow();
      });
    } else {
      this.props.onShow();
    }
  }

  // 隐藏
  hide() {
    if (this.props.useAnimation) {
      this.aniHide.stop();
      this.aniHide.start(() => {
        this.setState({
          visible: false,
        }, () => {
          this.props.onHide();
        });
      });
    } else {
      this.setState({
        visible: false,
      });
      this.props.onHide();
    }
  }

  render() {
    if (!this.state.visible) {
      return null;
    }

    if (this.props.useAnimation) {
      return (
        <Animated.View
          style={[styles.all, {
            opacity: this.state.opacity,
          }, this.props.style]}
          pointerEvents={this.props.pointerEvents}
        >
          <TouchableWithoutFeedback
            onPress={this.props.onPress}
          >
            <View style={styles.innerView} />
          </TouchableWithoutFeedback>
          {this.props.children}
        </Animated.View>
      );
    }

    return (
      <View
        style={[styles.all, this.props.style]}
        pointerEvents={this.props.pointerEvents}
      >
        <TouchableWithoutFeedback
          onPress={this.props.onPress}
        >
          <View style={styles.innerView} />
        </TouchableWithoutFeedback>
        {this.props.children}
      </View>
    );
  }
}

Overlay.propTypes = {
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 点击回调
  onPress: PropTypes.func,
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 控制 Overlay 是否可以作为触控事件的目标（参考 https://facebook.github.io/react-native/docs/view.html#pointerevents）
  pointerEvents: View.propTypes.pointerEvents,
  // 是否使用动画
  useAnimation: PropTypes.bool,
  // 动画时长
  duration: PropTypes.number,
  // 显示回调
  onShow: PropTypes.func,
  // 隐藏回调
  onHide: PropTypes.func,
};
Overlay.defaultProps = {
  visible: false,
  onPress: NOOP,
  style: null,
  children: null,
  pointerEvents: 'auto',
  useAnimation: true,
  duration: 200,
  onShow: NOOP,
  onHide: NOOP,
};

export default Overlay;
