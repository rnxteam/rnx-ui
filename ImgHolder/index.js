/**
 * 带占位的图片组件
 */
import React, {
  Component,
  PropTypes,
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
  constructor(props) {
    super(props);

    const { holder } = props;
    this.state = {
      holder,
    };
    this.onLoad = this.onLoad.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      autoRemoveHolder,
      source,
      holder,
    } = this.props;

    if (autoRemoveHolder) {
      if (nextProps.source !== source) {
        if (typeof nextProps.source === 'object' && typeof source === 'object'
          && typeof nextProps.source.uri === 'string' && typeof source.uri === 'string'
          && nextProps.source.uri === source.uri
        ) {
          // if source changes but uri not (a new object with same uri), Image will not fire onload,
          // so the holder will never hide.
          return;
        }

        this.setState({
          holder,
        });
      }
    }
  }

  onLoad() {
    if (this.props.autoRemoveHolder) {
      this.setState({
        holder: null,
      });
    }
  }

  render() {
    return (
      <View style={[styles.all, this.props.style]}>
        {
          this.state.holder
        }
        <Image
          onLoad={this.onLoad}
          source={this.props.source}
          style={[styles.img, this.props.imgStyle]}
          resizeMode={this.props.resizeMode}
        />
      </View>
    );
  }
}

ImgHolder.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 图片资源
  source: Image.propTypes.source,
  // 图片样式
  imgStyle: Image.propTypes.style,
  // 占位元素
  holder: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 图片加载完成是否移除 holder
  autoRemoveHolder: PropTypes.bool,
  // 图片自适应模式（参考：https://facebook.github.io/react-native/docs/image.html#resizemode）
  resizeMode: Image.propTypes.resizeMode,
};
ImgHolder.defaultProps = {
  style: null,
  source: {
    uri: '',
  },
  imgStyle: null,
  holder: null,
  autoRemoveHolder: false,
};

export default ImgHolder;
