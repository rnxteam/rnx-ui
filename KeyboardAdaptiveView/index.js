/**
 * @component KeyboardAdaptiveView
 * @version 0.13.0
 * @description
 *  适应键盘的容器
 * @instructions {instruInfo: ./KeyboardAdaptiveView/KeyboardAdaptiveView.md}
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  Platform,
  Dimensions,
  Keyboard,
  View,
} from 'react-native';

const NOOP = () => {};

const isIOS = Platform.OS === 'ios';
const keyboardDismissMode = isIOS ? 'on-drag' : 'none';
const windowHeight = Dimensions.get('window').height;

let inputY = 0;
let inputHeight = 0;
let kbdHeight = 0;

class KeyboardAdaptiveView extends Component {
  constructor(props) {
    super(props);

    props.getEl(this);

    this.state = {
      y: 0,
    };

    this.inputFocusHandle = this.inputFocusHandle.bind(this);
  }

  componentDidMount() {
    if (isIOS) {
      this.keyboardShowListener = Keyboard.addListener('keyboardWillShow', (e) => {
        kbdHeight = Math.max(e.endCoordinates.height, this.props.minKbdHeight);
        this.kbdHandle();
      });

      this.keyboardHideListener = Keyboard.addListener('keyboardWillHide', () => {
        this.reset();
        if (this.state.y !== 0) {
          this.setState({
            y: 0,
          });
        }
      });
    } else if (this.props.handlerAndroid) {
      // 安卓不支持 keyboardWillShow
      this.keyboardShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
        kbdHeight = Math.max(e.endCoordinates.height, this.props.minKbdHeight);
        // 安卓键盘收起 input 不会失去焦点
        this.isInputHandled = true;
        this.kbdHandle();
      });
      // 安卓不支持 keyboardWillHide
      this.keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
        this.reset();
        if (this.state.y !== 0) {
          this.setState({
            y: 0,
          });
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.keyboardShowListener) {
      this.keyboardShowListener.remove();
    }
    if (this.keyboardHideListener) {
      this.keyboardHideListener.remove();
    }
  }

  isInputHandled = false;
  isKbdHandled = false;
  inputHandle() {
    this.isInputHandled = true;
    this.check();
  }
  kbdHandle() {
    this.isKbdHandled = true;
    this.check();
  }
  check() {
    if (this.isInputHandled && this.isKbdHandled) {
      this.reset();

      const y = (windowHeight - kbdHeight) - (inputY + inputHeight) - this.props.moreDistance;

      if (y >= 0) {
        return;
      }

      this.setState({
        y,
      });
    }
  }
  reset() {
    this.isInputHandled = false;
    this.isKbdHandled = false;
  }

  inputFocusHandle(e) {
    /* eslint-disable */
    const el = e._dispatchInstances || e._targetInst;
    /* eslint-enable */
    el.measure((fx, fy, width, height, px, py) => {
      inputY = py;
      inputHeight = height;
      this.inputHandle();
    });
  }

  render() {
    return (
      <View
        style={[{
          transform: [{
            translateY: this.state.y,
          }],
        }, this.props.style]}
      >
        {
          this.props.children
        }
      </View>
    );
  }
}

KeyboardAdaptiveView.propTypes = {
  /**
   * @property getEl
   * @type Function
   * @default NOOP
   * @description 获取元素回调
   */
  getEl: PropTypes.func,
  /**
   * @property style
   * @type Objectt
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
   * @property moreDistance
   * @type Number
   * @default 40
   * @description 更多距离。iOS 系统键盘可能会出现 suggest 行，导致键盘高度获取不准确。
   */
  moreDistance: PropTypes.number,
  /**
   * @property minkbdHeight
   * @type Number
   * @default 250
   * @description 最小键盘高度
   */
  minKbdHeight: PropTypes.number,
  /**
   * @property handlerAndroid
   * @type Boolean
   * @default false
   * @description 安卓系统是否处理
   */
  handlerAndroid: PropTypes.bool,
};
KeyboardAdaptiveView.defaultProps = {
  getEl: NOOP,
  style: null,
  children: null,
  moreDistance: 40,
  minKbdHeight: 250,
  handlerAndroid: false,
};

export default KeyboardAdaptiveView;
export {
  keyboardDismissMode,
};
