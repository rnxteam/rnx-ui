import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  ListView,
} from 'react-native';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

const DS = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 5,
  },
});

class List extends Component {
  constructor(props) {
    super(props);
    this.dataSource = DS.cloneWithRows(props.items);
  }

  render() {
    return (
      <ListView
        style={[styles.list, this.props.style]}
        dataSource={this.dataSource}
        renderRow={(item) => {
          if (item.type === 'title') {
            return <ListItemTitle text={item.text} />;
          }
          return (
            <ListItem
              item={item}
              pressContext={this.props.pressContext}
            />
          );
        }}
      />
    );
  }
}

List.propTypes = {
  // 自定义样式
  style: ListView.propTypes.style,
  // 列表项
  items: PropTypes.arrayOf(PropTypes.object),
  // onPress 回调上下文
  pressContext: PropTypes.instanceOf(Component),
};
List.defaultProps = {
  style: null,
  items: [],
  pressContext: null,
};

export default List;
