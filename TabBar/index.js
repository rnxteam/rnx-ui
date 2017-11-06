import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  HAIRLINE_WIDTH,
} from '../constant';

const NOOP = () => {};

const styles = StyleSheet.create({
  all: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#C9C9C9',
    borderTopWidth: HAIRLINE_WIDTH,
  },
  item: {
    flex: 1,
    justifyContent: 'space-around',
  }
});

class TabBar extends Component {
  onPress() {
    this.context.props.onPress(this.id);
  }

  render() {
    return (
      <View style={[styles.all, this.props.style]}>
        {
          this.props.items.map((item, index) => (
            <View key={index} style={styles.item}>
              <TouchableOpacity
              key={index}
              id={item.id}
              context={this}
              onPress={this.onPress}
              activeOpacity={this.props.activeOpacity}
            >
              {
                this.props.activeId === item.id ?
                item.activedComponent : item.defaultComponent
              }
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
    );
  }
}

TabBar.propTypes = {
  // 激活项的 Id，必须是 items 项的 id 属性
  activeId: PropTypes.string,
  // 自定义样式
  style: View.propTypes.style,
  /* eslint-disable */
  // tab 项
  items: PropTypes.arrayOf(PropTypes.shape({
    // tab 项 id
    id: PropTypes.string,
    // tab 项默认元素
    defaultComponent: PropTypes.element,
    // tab 项激活元素
    activedComponent: PropTypes.element,
  })),
  /* eslint-enable */
  // tab 项点击时透明度
  activeOpacity: PropTypes.number,
  /* eslint-disable */
  // 改变激活项时的回调，点击项的 id 会作为参数传入。
  onPress: PropTypes.func,
  /* eslint-enable */
};
TabBar.defaultProps = {
  activeId: '',
  style: null,
  items: [{}],
  activeOpacity: 1,
  onPress: NOOP,
};

export default TabBar;
