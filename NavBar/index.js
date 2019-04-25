import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  ACTIVE_OPACITY,
} from '../constant';
import styles from './styles.js';

const isAndroid = Platform.OS === 'android';

const STATUS_BAR_HEIGHT = isAndroid ? 0 : 20;
const HEADER_HEIGHT = isAndroid ? 56 : 44;

const NOOP = () => {};

class NavBar extends Component {
  makeTitle() {
    let title = this.props.title;
    if (typeof title === 'string') {
      title = (
        <Text
          style={[styles.title, this.props.titleStyle]}
          numberOfLines={1}
        >
          {this.props.title}
        </Text>
      );
    }
    return title;
  }
  makeLeftBtn() {
    let leftBtn = this.props.leftBtn;
    if (typeof leftBtn === 'string') {
      leftBtn = (
        <Text
          style={[styles.btnText, this.props.leftBtnStyle]}
        >
          {this.props.leftBtn}
        </Text>
      );
    }
    return leftBtn;
  }
  makeRightBtn() {
    let rightBtn = this.props.rightBtn;
    if (typeof rightBtn === 'string') {
      rightBtn = (
        <Text
          style={[styles.btnText, this.props.rightBtnStyle]}
        >
          {this.props.rightBtn}
        </Text>
      );
    }
    return rightBtn;
  }
  render() {
    const title = this.makeTitle();
    const leftBtn = this.makeLeftBtn();
    const rightBtn = this.makeRightBtn();

    return (
      <View
        style={[styles.navBar, {
          paddingTop: this.props.statusBarHeight,
        }, this.props.style]}
      >
        <View
          style={[styles.header, {
            height: this.props.headerHeight,
          }]}
        >
          <View
            style={[styles.titleWrapper, {
              left: this.props.titleGap,
              right: this.props.titleGap,
            }]}
          >
            {title}
          </View>
          <TouchableOpacity
            activeOpacity={this.props.leftBtnDisabled ? 1 : this.props.activeOpacity}
            onPress={this.props.leftBtnDisabled ? NOOP : this.props.leftEvent}
            hitSlop={this.props.hitSlop}
          >
            <View style={styles.btn}>
              {leftBtn}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={this.props.rightBtnDisabled ? 1 : this.props.activeOpacity}
            onPress={this.props.rightBtnDisabled ? NOOP : this.props.rightEvent}
            hitSlop={this.props.hitSlop}
          >
            <View style={styles.btn}>
              {rightBtn}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

NavBar.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // statusBar 高度
  statusBarHeight: PropTypes.number,
  // header 高度
  headerHeight: PropTypes.number,
  // 标题
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 标题文本样式（title 为字符串时才生效）
  titleStyle: Text.propTypes.style,
  // 标题到左右两边的距离
  titleGap: PropTypes.number,
  // 左侧按钮
  leftBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 左侧按钮点击事件
  leftEvent: PropTypes.func,
  // 左侧按钮文本样式（leftBtn 为字符串时才生效）
  leftBtnStyle: Text.propTypes.style,
  // 左侧按钮禁用
  leftBtnDisabled: PropTypes.bool,
  // 右侧按钮
  rightBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 右侧按钮点击事件
  rightEvent: PropTypes.func,
  // 右侧按钮文本样式（rightBtn 为字符串时才生效）
  rightBtnStyle: Text.propTypes.style,
  // 右侧按钮禁用
  rightBtnDisabled: PropTypes.bool,
  // 按钮点击透明度变化
  activeOpacity: PropTypes.number,
  // 按钮热区
  hitSlop: TouchableOpacity.propTypes.hitSlop,
};
NavBar.defaultProps = {
  style: null,
  statusBarHeight: STATUS_BAR_HEIGHT,
  headerHeight: HEADER_HEIGHT,
  title: '',
  titleStyle: null,
  titleGap: 50,
  leftBtn: null,
  leftEvent: NOOP,
  leftBtnStyle: null,
  leftBtnDisabled: false,
  rightBtn: null,
  rightEvent: NOOP,
  rightBtnStyle: null,
  rightBtnDisabled: false,
  activeOpacity: ACTIVE_OPACITY,
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
};

export default NavBar;
