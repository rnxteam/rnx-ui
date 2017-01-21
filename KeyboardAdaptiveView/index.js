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

const Tree = require('react/lib/ReactNativeComponentTree');

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
      this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', (e) => {
        kbdHeight = e.endCoordinates.height;
        this.kbdHandle();
      });

      this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', () => {
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
    if (isIOS) {
      this.keyboardWillShowListener.remove();
      this.keyboardWillHideListener.remove();
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
    const el = Tree.getInstanceFromNode(e.target);
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
  // 获取元素回调
  getEl: PropTypes.func,
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 更多距离。iOS 系统键盘可能会出现 suggest 行，导致键盘高度获取不准确。
  moreDistance: PropTypes.number,
};
KeyboardAdaptiveView.defaultProps = {
  getEl: NOOP,
  style: null,
  children: null,
  moreDistance: 40,
};

export default KeyboardAdaptiveView;
export {
  keyboardDismissMode,
};
