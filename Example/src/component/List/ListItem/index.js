import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import transPxToDp from 'rnx-ui/util/transPxToDp';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomColor: '#C9C9C9',
    borderBottomWidth: transPxToDp(1),
    padding: 10,
    backgroundColor: '#fff',
  },
});


class ListItem extends Component {
  constructor(props) {
    super(props);

    let pressContext = this;
    if (props.pressContext) {
      pressContext = props.pressContext;
    }

    const onPress = props.item.onPress;
    if (typeof onPress === 'function') {
      this.onPress = onPress.bind(pressContext);
    }
  }

  render() {
    const content = this.props.item.content;
    const onPress = this.onPress;

    const contentComponent = typeof content === 'string' ? (
      <Text>
        {content}
      </Text>
    ) : content;
    let WrapperComponent = View;

    if (typeof onPress === 'function') {
      WrapperComponent = TouchableHighlight;
    }

    return (
      <WrapperComponent
        style={styles.item}
        underlayColor="#ddd"
        onPress={onPress}
      >
        {contentComponent}
      </WrapperComponent>
    );
  }
}

ListItem.propTypes = {
  // 列表项
  item: PropTypes.shape({
    // 列表项内容
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    // 列表项点击事件
    onPress: PropTypes.function,
  }),
  // onPress 回调上下文
  pressContext: PropTypes.instanceOf(Component),
};
ListItem.defaultProps = {
  item: {
    content: '',
    onPress: () => {},
  },
  pressContext: null,
};

export default ListItem;
