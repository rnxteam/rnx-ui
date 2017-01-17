/**
 * 带占位的图片组件
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  all: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  img: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: null,
    width: null,
  },
});

class ImgHolder extends Component {
  render() {
    return (
      <View style={[styles.all, this.props.style]}>
        {
          this.props.holder
        }
        <Image source={this.props.source} style={styles.img} />
      </View>
    );
  }
}

ImgHolder.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 占位元素
  holder: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 图片资源
  source: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired,
};
ImgHolder.defaultProps = {
  style: null,
  holder: null,
  source: {
    uri: '',
  },
};

export default ImgHolder;
