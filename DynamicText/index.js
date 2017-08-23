/**
 * 文本框，文字超长时滚动显示
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
const MODE_CYCLE = 'cycle';

class DynamicText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      translateX: new Animated.Value(0),
      translateXCycle: new Animated.Value(0),
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

  componentWillUnmount() {
    if (this.timeoutScrollId) {
      clearTimeout(this.timeoutScrollId);
    }
    if (this.animation) {
      this.animation.stop();
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
          this.scrollText(offSet, true, true);
        }
      }
    }
  }

  scrollText(offSet, isPositionStart, isFirst = false) {
    if (this.props.mode === MODE_RESTART || this.props.mode === MODE_REVERSE) {
      this.animation = Animated.timing(this.state.translateX, {
        delay: isFirst ? 0 : this.props.bufferTime,
        duration: Math.abs(offSet) * (100 / this.props.speed),
        toValue: isPositionStart ? offSet : 0,
        easing: Easing.linear,
      }).start(({ finished }) => {
        if (!finished) {
          this.state.translateX.setValue(0);
          return;
        }
        this.timeoutScrollId = setTimeout(() => {
          if (this.props.mode === MODE_REVERSE) {
            // 从末尾滚动至文字开始
            this.scrollText(offSet, !isPositionStart);
          } else if (this.props.mode === MODE_RESTART) {
            // 跳回文字开始，并开始新的动画滚动到文字末尾
            this.state.translateX.setValue(0);
            this.scrollText(offSet, true);
          }
        }, this.props.delayTime);
      });
    } else if (this.props.mode === MODE_CYCLE) {
      const textWidth = this.state.textWidth;
      /* eslint-disable no-underscore-dangle */
      this.animation = Animated.parallel([
        Animated.timing(this.state.translateX, {
          delay: 0,
          duration: Math.abs(textWidth) * (100 / this.props.speed),
          toValue: this.state.translateX._value - textWidth,
          easing: Easing.linear,
        }),
        Animated.timing(this.state.translateXCycle, {
          delay: 0,
          duration: Math.abs(textWidth) * (100 / this.props.speed),
          toValue: this.state.translateXCycle._value - textWidth,
          easing: Easing.linear,
        }),
      ]).start(({ finished }) => {
        if (!finished) {
          this.state.translateX.setValue(0);
          this.state.translateXCycle.setValue(0);
          return;
        }
        if (this.state.translateX._value === textWidth * -1) {
          this.state.translateX.setValue(textWidth);
        }
        if (this.state.translateXCycle._value === textWidth * -2) {
          this.state.translateXCycle.setValue(0);
        }
        this.scrollText(offSet, true);
      });
      /* eslint-disable no-underscore-dangle */
    }
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
            flexDirection: 'row',
          }}
        >
          <Animated.Text
            style={[
              this.props.textStyle, this.props.mode === MODE_CYCLE ? {
                paddingRight: this.props.reverseSpacing,
              } : null, {
                transform: [{
                  translateX: this.state.translateX,
                }],
              },
            ]}
            onLayout={this.onTextLayout}
          >
            {this.props.children}
          </Animated.Text>
          {
            this.props.mode === MODE_CYCLE ?
              <Animated.Text
                style={[
                  this.props.textStyle, {
                    paddingRight: this.props.reverseSpacing,
                  }, {
                    transform: [{
                      translateX: this.state.translateXCycle,
                    }],
                  },
                ]}
              >
                {this.props.children}
              </Animated.Text>
              : null
          }
        </View>
      </View>
    );
  }
}

DynamicText.propTypes = {
  // 自定义wrapper样式
  style: View.propTypes.style,
  // 自定义文本样式
  textStyle: Text.propTypes.style,
  // 显示文本
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // 文字循环模式，默认reverse
  // reverse：轮转到末尾后再轮转回开头
  // restart: 轮转到末尾后返回至开头重新循环
  mode: PropTypes.oneOf([MODE_RESTART, MODE_REVERSE, MODE_CYCLE]),
  // 动画间隔时间，默认500
  bufferTime: PropTypes.number,
  // 文字滚动速度，默认5，数字越大，速度越快
  speed: PropTypes.number,
  // 文本最大宽度
  maxWidth: PropTypes.number,
  // MODE_RESTART, MODE_REVERSE 到末尾再开始滚动的延迟
  delayTime: PropTypes.number,
  // reverse模式下两组文案的间距
  reverseSpacing: PropTypes.number,
};
DynamicText.defaultProps = {
  style: null,
  textStyle: null,
  children: null,
  mode: MODE_CYCLE,
  bufferTime: 500,
  speed: 5,
  maxWidth: 2000,
  delayTime: 500,
  reverseSpacing: 0,
};

export default DynamicText;
