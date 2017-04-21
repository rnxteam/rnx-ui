/**
 * 遮罩层
 * @component Overlay
 * @version 0.16.0
 * @description 遮罩层
 * 具有渐隐渐显动画效果的遮罩层组件。
 *
 * @instructions {instruInfo: ./Overlay/Overlay.md}
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

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
      duration: 200,
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
      this.aniShow.start();
    }
  }

  // 隐藏
  hide() {
    if (this.props.useAnimation) {
      this.aniHide.stop();
      this.aniHide.start(() => {
        this.setState({
          visible: false,
        });
      });
    } else {
      this.setState({
        visible: false,
      });
    }
  }

  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPress}
      >
        {
          this.props.useAnimation ? (
            <Animated.View
              style={[styles.all, {
                opacity: this.state.opacity,
              }, this.props.style]}
              pointerEvents={this.props.pointerEvents}
            >
              {this.props.children}
            </Animated.View>
          ) : (
            <View
              style={[styles.all, this.props.style]}
              pointerEvents={this.props.pointerEvents}
            >
              {this.props.children}
            </View>
          )
        }
      </TouchableWithoutFeedback>
    );
  }
}

Overlay.propTypes = {
  /**
   * @property visible
   * @type Boolean
   * @default false
   * @description 显示开关
   */
  visible: PropTypes.bool.isRequired,
  /**
   * @property onPress
   * @type Function
   * @default NOOP
   * @description 点击回调
   */
  onPress: PropTypes.func,
  /**
   * @property style
   * @type Object
   * @default null
   * @description 自定义样式
   */
  style: View.propTypes.style,
  /**
   * @property children
   * @type Element Array
   * @default null
   * @description 子元素
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  /**
   * @property pointerEvents
   * @type String
   * @default 'auto'
   * @description 控制 Overlay 是否可以作为触控事件的目标（参考 https://facebook.github.io/react-native/docs/view.html#pointerevents）
   */
  pointerEvents: View.propTypes.pointerEvents,
  /**
   * @property duration
   * @type Number
   * @default 200
   * @description 动画时长
   */
  duration: PropTypes.number,
   /**
   * @property useAnimation
   * @type Boolean
   * @default true
   * @description 是否使用动画
   */
  useAnimation: PropTypes.bool,
};
Overlay.defaultProps = {
  visible: false,
  onPress: NOOP,
  style: null,
  children: null,
  pointerEvents: 'auto',
  duration: 200,
  useAnimation: true,
};

export default Overlay;
