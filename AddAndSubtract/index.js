/**
 * @component AddAndSubtract
 * @version 0.17.0
 * @description 加减法动画组件
 *
 * @instructions {instruInfo: ./AddAndSubtract/AddAndSubtract.md}
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Animated,
} from 'react-native';

import styles from './styles';

const NOOP = () => {};

class AddAndSubtract extends Component {
  constructor(props) {
    super(props);

    const { num } = props;
    const toSubtracterX = -props.distance - props.btnWidth;
    const isShow = num > 0;

    this.isShow = isShow;
    this.subtracterX = new Animated.Value(isShow ? toSubtracterX : 0);
    this.subtracterRotate = new Animated.Value(isShow ? 1 : 0);

    this.aniShow = this.makeAnimation(toSubtracterX, 1);
    this.aniHide = this.makeAnimation(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    const num = nextProps.num;
    if (typeof num === 'number') {
      if (num > 0 && this.isShow === false) {
        this.isShow = true;
        this.show();
      } else if (num === 0 && this.isShow === true) {
        this.isShow = false;
        this.hide();
      }
    }
  }

  makeAnimation(toSubtracterX, toSubtracterRotate) {
    return Animated.parallel([
      Animated.timing(this.subtracterX, {
        toValue: toSubtracterX,
        duration: this.props.duration,
        easing: this.props.easing,
      }),
      Animated.timing(this.subtracterRotate, {
        toValue: toSubtracterRotate,
        duration: this.props.duration,
        easing: this.props.easing,
      }),
    ]);
  }

  show() {
    this.aniHide.stop();
    this.aniShow.start();
  }

  hide() {
    this.aniShow.stop();
    this.aniHide.start();
  }

  render() {
    const {
      num,
      btnWidth,
    } = this.props;
    const btnBorderRadius = btnWidth / 2;
    const btnStyle = [styles.btn, {
      width: btnWidth,
      height: btnWidth,
      borderRadius: btnBorderRadius,
    }];

    return (
      <View style={[styles.all, this.props.style]}>
        <Animated.View
          style={[styles.subtracterWrapper, {
            transform: [{
              translateX: this.subtracterX,
            }, {
              rotate: this.subtracterRotate.interpolate({
                inputRange: [0, 1],
                outputRange: [`${this.props.deg}deg`, '0deg'],
              }),
            }],
          }, this.props.subtracterWrapperStyle]}
        >
          <TouchableHighlight
            underlayColor="#ddd"
            style={[btnStyle, this.props.subtracterBtnStyle]}
            onPress={this.props.onPressSubtracter}
            hitSlop={this.props.hitSlop}
          >
            <View
              style={[styles.subtracter, {
                borderRadius: btnBorderRadius,
              }, this.props.subtracterStyle]}
            >
              {this.props.subtracter}
            </View>
          </TouchableHighlight>
        </Animated.View>
        <View
          style={[styles.text, {
            width: this.props.distance,
          }]}
        >
          <Text style={this.props.textStyle}>
            {num > 0 ? num : null}
          </Text>
        </View>
        <TouchableHighlight
          style={[btnStyle, this.props.adderBtnStyle]}
          onPress={this.props.onPressAdder}
          hitSlop={this.props.hitSlop}
        >
          <View
            style={[styles.adder, {
              borderRadius: btnBorderRadius,
            }, this.props.adderStyle]}
          >
            {this.props.adder}
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

AddAndSubtract.propTypes = {
    /**
     * @property num
     * @type Number
     * @default 0
     * @description 数字
     */
  num(props, propName) {
    const num = props[propName];
    if (typeof num !== 'number') {
      return new Error('AddAndSubtract.props.num must be a number.');
    }
    if (num < 0) {
      return new Error('AddAndSubtract.props.num must be greater than 0.');
    }
    return null;
  },
    /**
     * @property onPressAdder
     * @type Function
     * @default NOOP
     * @description 加法按钮点击事件
     */
  onPressAdder: PropTypes.func,
    /**
     * @property onPressSubtracter
     * @type Function
     * @default NOOP
     * @description 减法按钮点击事件
     */
  onPressSubtracter: PropTypes.func,
    /**
     * @property duration
     * @type Number
     * @default 200
     * @description 动画时间
     */
  duration: PropTypes.number,
    /**
     * @property distance
     * @type Number
     * @default 30
     * @description 减法按钮移动距离
     */
  distance: PropTypes.number,
    /**
     * @property deg
     * @type Number
     * @default 180
     * @description 减法旋转角度
     */
  deg: PropTypes.number,
    /**
     * @property easing
     * @type Function
     * @default t => t
     * @description 动画函数
     */
  easing: PropTypes.func,
    /**
     * @property btnWidth
     * @type Number
     * @default 30
     * @description 按钮宽度
     */
  btnWidth: PropTypes.number,
    /**
     * @property style
     * @type Object
     * @default null
     * @description 自定义样式
     */
  style: View.propTypes.style,
    /**
     * @property adderBtnStyle
     * @type Object
     * @default null
     * @description 加法按钮样式
     */
  adderBtnStyle: View.propTypes.style,
    /**
     * @property adderStyle
     * @type Object
     * @default null
     * @description 加法元素样式
     */
  adderStyle: View.propTypes.style,
    /**
     * @property subtracterWrapperStyle
     * @type Object
     * @default null
     * @description 减法按钮容器样式
     */
  subtracterWrapperStyle: View.propTypes.style,
    /**
     * @property subtracterBtnStyle
     * @type Object
     * @default null
     * @description 减法按钮样式
     */
  subtracterBtnStyle: View.propTypes.style,
    /**
     * @property subtracterStyle
     * @type Object
     * @default null
     * @description 减法元素样式
     */
  subtracterStyle: View.propTypes.style,
    /**
     * @property textStyle
     * @type Object
     * @default null
     * @description 自定义字体样式
     */
  textStyle: Text.propTypes.style,
    /**
     * @property adder
     * @type Element Array
     * @default null
     * @description 加法按钮
     */
  adder: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    /**
     * @property subtracter
     * @type Element Array
     * @default <Text style={styles.adderText}>+</Text>
     * @description 减法按钮
     */
  subtracter: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    /**
     * @property hitSlop
     * @type Object
     * @default  {
     *         top: 5,
     *         left: 5,
     *         right: 5,
     *         bottom: 5,
     *       },
     * @description 按钮热区
     */
  hitSlop: TouchableHighlight.propTypes.hitSlop,
};
AddAndSubtract.defaultProps = {
  num: 0,
  onPressAdder: NOOP,
  onPressSubtracter: NOOP,
  duration: 200,
  distance: 30,
  deg: 180,
  easing: t => t,
  btnWidth: 30,
  style: null,
  adderBtnStyle: null,
  adderStyle: null,
  subtracterWrapperStyle: null,
  subtracterBtnStyle: null,
  subtracterStyle: null,
  textStyle: null,
  adder: <Text style={styles.adderText}>+</Text>,
  subtracter: <Text style={styles.subtracterText}>-</Text>,
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
};

export default AddAndSubtract;
