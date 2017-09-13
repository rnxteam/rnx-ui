import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  ACTIVE_OPACITY,
} from '../constant';
import Sheet from '../Sheet';
import styles from './styles.js';

const NOOP = () => {};

class HeaderedSheet extends Component {
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
      <Sheet
        visible={this.props.visible}
        overlayStyle={this.props.overlayStyle}
        onPressOverlay={this.props.onPressOverlay}
        overlayAnimationDuration={this.props.overlayAnimationDuration}
        onShow={this.props.onShow}
        onHide={this.props.onHide}
        duration={this.props.duration}
        style={[styles.containerStyle, this.props.containerStyle]}
      >
        <TouchableWithoutFeedback>
          <View>
            <View
              style={[styles.header, this.props.headerStyle]}
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
                activeOpacity={this.props.activeOpacity}
                onPress={this.props.onPressLeftBtn}
              >
                <View style={styles.btn}>
                  {leftBtn}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={this.props.activeOpacity}
                onPress={this.props.onPressRightBtn}
              >
                <View style={styles.btn}>
                  {rightBtn}
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.container, this.props.style]}>
              {this.props.children}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Sheet>
    );
  }
}

HeaderedSheet.propTypes = {
  // 显示开关
  visible: Sheet.propTypes.visible,
  // 遮罩层样式
  overlayStyle: Sheet.propTypes.overlayStyle,
  // 遮罩点击事件
  onPressOverlay: Sheet.propTypes.onPressOverlay,
  // Overlay 动画时长
  overlayAnimationDuration: PropTypes.number,
  // 动画时长
  duration: Sheet.propTypes.duration,
  // 显示回调
  onShow: PropTypes.func,
  // 隐藏回调
  onHide: PropTypes.func,
  // 自定容器义样式（包含 header 区域）
  containerStyle: Sheet.propTypes.style,
  // 自定义样式
  style: View.propTypes.style,
  // 自定义 header 样式
  headerStyle: View.propTypes.style,
  // 标题
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 标题文本样式（title 为字符串时才生效）
  titleStyle: Text.propTypes.style,
  // 标题到左右两边的距离
  titleGap: PropTypes.number,
  // 左侧按钮
  leftBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 左侧点击事件
  onPressLeftBtn: PropTypes.func,
  // 左侧按钮文本样式（leftBtn 为字符串时才生效）
  leftBtnStyle: Text.propTypes.style,
  // 右侧按钮
  rightBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 右侧点击事件
  onPressRightBtn: PropTypes.func,
  // 右侧按钮文本样式（rightBtn 为字符串时才生效）
  rightBtnStyle: Text.propTypes.style,
  // 按钮点击透明度变化
  activeOpacity: PropTypes.number,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
HeaderedSheet.defaultProps = {
  visible: false,
  overlayStyle: null,
  onPressOverlay: NOOP,
  duration: 200,
  style: null,
  headerHeight: null,
  title: '',
  titleStyle: null,
  titleGap: 50,
  leftBtn: null,
  onPressLeftBtn: NOOP,
  leftBtnStyle: null,
  rightBtn: null,
  onPressRightBtn: NOOP,
  rightBtnStyle: null,
  activeOpacity: ACTIVE_OPACITY,
  children: null,
};

export default HeaderedSheet;
