import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  ListView,
} from 'react-native';

import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

const DS = new ListView.DataSource({
  getRowData: (data, sectionId, rowId) => data[`${sectionId}:${rowId}`],
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
  getSectionData: (data, sectionId) => data[sectionId],
  rowHasChanged: (r1, r2) => r1 !== r2,
});

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

class List extends Component {
  constructor(props) {
    super(props);
    const { items, sectionIds, rowIds } = props;

    this.dataSource = DS.cloneWithRowsAndSections(items, sectionIds, rowIds);
    this.renderRow = this.renderRow.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
  }

  renderRow(item) {
    return (
      <ListItem
        item={item}
        pressContext={this.props.pressContext}
      />
    );
  }

  renderSectionHeader(sectionData) {
    return (
      <ListItemTitle text={sectionData.text} />
    );
  }

  render() {
    return (
      <ListView
        style={[styles.list, this.props.style]}
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
      />
    );
  }
}

List.propTypes = {
  // 自定义样式
  style: ListView.propTypes.style,
  // 列表项
  items: PropTypes.object,
  sectionIds: PropTypes.arrayOf(PropTypes.string),
  rowIds: PropTypes.arrayOf(PropTypes.array),
  // onPress 回调上下文
  pressContext: PropTypes.instanceOf(Component),
};
List.defaultProps = {
  style: null,
  items: [],
  pressContext: null,
};

export default List;
