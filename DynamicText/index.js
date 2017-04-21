/**
 * @component DynamicText
 * @version 0.17.0
 * @description 自动滚动的文本框：文字超长时滚动显示
 *
 * @instructions {instruInfo: ./DynamicText/DynamicText.md}
 */
import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Easing,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  realWidthHelper: {
    width: 10000,
    borderWidth: 1,
    borderColor: 'blue',
  },
});

const MODE_RESTART = 'restart';
const MODE_REVERSE = 'reverse';

class DynamicText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      translateX: new Animated.Value(0),
    };

    this.hasTextLayout = false;
    this.flag = false;

    this.onContainerLayout = this.onContainerLayout.bind(this);
    this.onTextLayout = this.onTextLayout.bind(this);
    this.scrollText = this.scrollText.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children) {
      this.hasTextLayout = false;
      this.flag = true;
      if (this.animation) {
        this.animation.stop();
      }
    }
  }

  onContainerLayout({ nativeEvent }) {
    const oldContainerWidth = this.containerWidth;
    this.containerWidth = nativeEvent.layout.width;
    // console.log(this.containerWidth)

    if (this.containerWidth !== oldContainerWidth) {
      this.flag = true;
    }

    this.check();
  }
  onTextLayout({ nativeEvent }) {
    if (this.hasTextLayout) {
      return;
    }
    this.hasTextLayout = true;
    this.setState({
      textWidth: nativeEvent.layout.width,
    }, () => {
      this.check();
    });
  }

  check() {
    if (this.flag && this.hasTextLayout) {
      this.flag = false;

      const { textWidth } = this.state;
      const offSet = this.containerWidth - textWidth;

      if (!isNaN(offSet)) {
        if (offSet < 0) {
          this.scrollText(offSet, true);
        }
      }
    }
  }

  scrollText(offSet, isPositionStart) {
    this.animation = Animated.timing(this.state.translateX, {
      delay: this.props.bufferTime,
      duration: Math.abs(offSet) * (100 / this.props.speed),
      toValue: isPositionStart ? offSet : 0,
      easing: Easing.linear,
    }).start(({ finished }) => {
      if (!finished) {
        this.state.translateX.setValue(0);
        return;
      }
      if (this.props.mode === MODE_REVERSE) {
          // 从末尾滚动至文字开始
        this.scrollText(offSet, !isPositionStart);
      } else if (this.props.mode === MODE_RESTART) {
            // 跳回文字开始，并开始新的动画滚动到文字末尾
        this.state.translateX.setValue(0);
        this.scrollText(offSet, true);
      }
    });
  }


  render() {
    return (
      <View
        style={[styles.container, this.props.style]}
        onLayout={this.onContainerLayout}
      >
        <View
          style={{
            width: this.props.maxWidth,
          }}
        >
          <Animated.Text
            style={[
              this.props.textStyle,
              {
                position: this.hasTextLayout ? 'relative' : 'absolute',
                transform: [{
                  translateX: this.state.translateX,
                }],
              },
            ]}
            onLayout={this.onTextLayout}
          >
            {this.props.children}
          </Animated.Text>
        </View>
      </View>
    );
  }
}

DynamicText.propTypes = {
  /**
   * @property style
   * @type Object
   * @default null
   * @description 自定义wrapper样式
   */
  style: View.propTypes.style,
  /**
   * @property textStyle
   * @type Object
   * @default null
   * @description 自定义文本样式
   */
  textStyle: Text.propTypes.style,
  /**
   * @property children
   * @type String Number
   * @default null
   * @description 显示文本
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * @property mode
   * @type String
   * @default MODE_REVERSE
   * @param {String} MODE_RESTART 轮转到末尾后返回至开头重新循环
   * @param {String} MODE_REVERSE 轮转到末尾后再轮转回开头
   * @description 文字循环模式，默认reverse
   * reverse:轮转到末尾后再轮转回开头
   * restart: 轮转到末尾后返回至开头重新循环
   */
  mode: PropTypes.oneOf([MODE_RESTART, MODE_REVERSE]),
  /**
   * @property bufferTime
   * @type Number
   * @default 1000
   * @description 动画间隔时间
   */
  bufferTime: PropTypes.number,
  /**
   * @property speed
   * @type Number
   * @default 5
   * @description 文字滚动速度,数字越大,速度越快
   */
  speed: PropTypes.number,
  /**
   * @property maxWidth
   * @type Number
   * @default 2000
   * @description 文本最大宽度
   */
  maxWidth: PropTypes.number,
};
DynamicText.defaultProps = {
  style: null,
  textStyle: null,
  children: null,
  mode: MODE_REVERSE,
  bufferTime: 1000,
  speed: 5,
  maxWidth: 2000,
};

export default DynamicText;
