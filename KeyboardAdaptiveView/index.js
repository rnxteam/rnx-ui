import React, {
  PropTypes,
  Component,
} from 'react';
import {
  Platform,
  View,
  Keyboard,
} from 'react-native';

const isIOS = Platform.OS === 'ios';
const keyboardDismissMode = isIOS ? 'on-drag' : 'none';

class KeyboardAdaptiveView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyboardHeight: 0,
    };
  }

  componentDidMount() {
    if (isIOS) {
      this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', (e) => {
        this.setState({
          keyboardHeight: e.endCoordinates.height,
        });
      });
      this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', () => {
        this.setState({
          keyboardHeight: 0,
        });
      });
    }
  }

  componentWillUnmount() {
    if (isIOS) {
      this.keyboardWillShowListener.remove();
      this.keyboardWillHideListener.remove();
    }
  }

  render() {
    return (
      <View
        style={[{
          transform: [{
            translateY: -this.state.keyboardHeight,
          }],
          paddingBottom: this.state.keyboardHeight,
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
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
KeyboardAdaptiveView.defaultProps = {
  style: null,
  children: null,
};

export default KeyboardAdaptiveView;
export {
  keyboardDismissMode,
};
