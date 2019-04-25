import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Text,
  Easing,
} from 'react-native';

const styles = StyleSheet.create({
  all: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outer: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#ddd',
  },
  inner: {
    flex: 1,
    backgroundColor: '#108ee9',
  },
  text: {
    width: 50,
    textAlign: 'right',
  },
});

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressWidth: new Animated.Value(0),
    };

    this.outerWidth = 0;

    this.onLayout = this.onLayout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      const progressWidth = this.getProgressWidth(nextProps.value);
      /* eslint-disable */
      if (this.state.progressWidth._value !== progressWidth) {
      /* eslint-enable */
        Animated.timing(this.state.progressWidth, {
          toValue: progressWidth,
          duration: nextProps.duration,
          // linear animation looks smoother
          easing: Easing.linear,
        }).start();
      }
    }
  }

  getProgressWidth(ratio) {
    if (ratio < 0) {
      return 0;
    } else if (ratio > 1) {
      return this.outerWidth;
    }
    return this.outerWidth * ratio;
  }

  onLayout(e) {
    const { width } = e.nativeEvent.layout;
    if (width !== this.outerWidth) {
      this.outerWidth = width;
      this.setState({
        progressWidth: new Animated.Value(this.getProgressWidth(this.props.value)),
      });
    }
  }


  render() {
    return (
      <View
        style={[styles.all, this.props.style]}
      >
        <View
          style={[styles.outer, {
            height: this.props.width,
            borderRadius: this.props.width / 2,
          }, this.props.outerStyle]}
          onLayout={this.onLayout}
        >
          <Animated.View
            style={[styles.inner, {
              height: this.props.width,
              borderRadius: this.props.width / 2,
            }, this.props.innerStyle, {
              width: this.state.progressWidth,
            }]}
          />
        </View>
        {
          this.props.valueVisible ? (
            <Text
              style={[styles.text, this.props.valueStyle]}
            >
              {this.props.valueFormater(this.props.value)}
            </Text>
          ) : null
        }
      </View>
    );
  }
}

Progress.propTypes = {
  // 容器样式
  style: View.propTypes.style,
  // 进度条宽度
  width: PropTypes.number,
  // 进度条背景样式
  outerStyle: View.propTypes.style,
  // 进度条样式
  innerStyle: View.propTypes.style,
  // 动画时长
  /* eslint-disable */
  duration: PropTypes.number,
  /* eslint-enable */
  // 进度值
  value: PropTypes.number,
  // 是否显示进度值
  valueVisible: PropTypes.bool,
  // 进度值样式
  valueStyle: Text.propTypes.style,
  // 进度值格式函数
  valueFormater: PropTypes.func,
};
Progress.defaultProps = {
  style: null,
  width: 10,
  outerStyle: null,
  innerStyle: null,
  duration: 300,
  value: 0,
  valueVisible: true,
  valueStyle: null,
  valueFormater(value) {
    let percent;
    if (value < 0) {
      percent = 0;
    } else if (value > 1) {
      percent = 100;
    } else {
      percent = Math.round(value * 100);
    }
    return `${percent}%`;
  },
};

export default Progress;
