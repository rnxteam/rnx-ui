/**
 * 带标题展示组件
 */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  all: {
    marginBottom: 10,
  },
  title: {
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 10,
  },
});

function Article(props) {
  return (
    <View style={[styles.all, props.style]}>
      <View style={[styles.title, props.titleStyle]}>
        <Text style={styles.titleText}>
          { props.title }
        </Text>
      </View>
      {
        props.children
      }
    </View>
  );
}

Article.propTypes = {
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 自定义样式
  style: View.propTypes.style,
  // 标题
  title: PropTypes.string,
  // 标题样式
  titleStyle: View.propTypes.style,
};

Article.defaultProps = {
  children: null,
  style: null,
  title: '',
  titleStyle: null,
};

export default Article;
