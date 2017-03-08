import React, {
  Component,
  PropTypes,
} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableHighlight,
  Text,
} from 'react-native';

import styles from './styles';

const NOOP = () => {};

class ImgDisplayer extends Component {
  constructor(props) {
    super(props);

    this.onImgPress = this.onImgPress.bind(this);
    this.onDeleterPress = this.onDeleterPress.bind(this);
  }

  onImgPress() {
    this.props.onImgPress(this.props.uri, this.props.index);
  }
  onDeleterPress() {
    this.props.onDeleterPress(this.props.uri, this.props.index);
  }

  render() {
    return (
      <View style={styles.all}>
        <View
          style={this.props.style}
        >
          <TouchableWithoutFeedback
            style={styles.btn}
            onPress={this.onImgPress}
          >
            <Image
              style={[styles.img, this.props.imgStyle]}
              source={{
                uri: this.props.uri,
              }}
            />
          </TouchableWithoutFeedback>
        </View>
        <TouchableHighlight
          underlayColor={this.props.deleterUnderlayColor}
          style={[styles.deleter, this.props.deleterStyle]}
          onPress={this.onDeleterPress}
          hitSlop={this.props.deleterHitSlop}
        >
          <View style={styles.deleterContainer}>
            {this.props.deleter}
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

ImgDisplayer.propTypes = {
  // 图片 uri
  uri: PropTypes.string,
  // index
  index: PropTypes.number,
  // 自定义样式
  style: View.propTypes.style,
  // 图片自定义样式
  imgStyle: Image.propTypes.style,
  // 图片点击回调
  onImgPress: PropTypes.func,
  // 删除按钮内容元素
  deleter: PropTypes.element,
  // 删除按钮自定义样式
  deleterStyle: View.propTypes.style,
  // 删除按钮点击回调
  onDeleterPress: PropTypes.func,
  // 删除按钮点击颜色反馈
  deleterUnderlayColor: PropTypes.string,
  // 删除按钮热区
  deleterHitSlop: TouchableHighlight.propTypes.hitSlop,
};
ImgDisplayer.defaultProps = {
  uri: '',
  index: 0,
  style: null,
  imgStyle: null,
  onImgPress: NOOP,
  deleter: (<Text style={styles.deleterText}>x</Text>),
  deleterStyle: null,
  onDeleterPress: NOOP,
  deleterUnderlayColor: 'rgba(0, 0, 0, 0.8)',
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
};

export default ImgDisplayer;
