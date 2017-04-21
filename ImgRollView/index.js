/**
 * @component ImgRollView
 * @version 0.13.0
 * @description 图片多选组件
 *
 * @instructions {instruInfo: ./ImgRollView/ImgRollView.md}
 */
import React, { Component, PropTypes } from 'react';
import {
  Text,
  Image,
  View,
  CameraRoll,
  ListView,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import style from './styles';
import { groupByEveryN, SelectTick } from './utils';

const { height, width } = Dimensions.get('window');

class ImgRollView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {
        if (r1 && r2) {
          return r1.some((v, i) => r2[i] !== v);
        }
        return r1 !== r2;
      },
    });
    const { imagesPerRow, gap } = props;
    /**
     * @description 根据屏幕宽度与每行图片树计算图片宽
     */
    this.sideLength = ((width + gap) / imagesPerRow) - gap;
    /**
     * @description 根据屏幕高度获取首屏要加载的图片数量
     */
    this.pageSize = Math.ceil((height + gap) / (this.sideLength + gap)) * imagesPerRow;
    /**
     * @description 记录已经选择的 uri
     */
    this.uriSelected = props.uriList;

    this.state = {
      assets: [],
      dataSource: ds.cloneWithRows([]),
    };

    /**
     * @description autobind
     */
    this.onEndReached = this.onEndReached.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    this.fetch();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.uriList !== this.props.uriList) {
      this.uriSelected = nextProps.uriList;
      const assets = this.setSelectedAsset(this.state.assets, this.uriSelected);
      this.updateAssets({ assets });
    }
  }

  onEndReached() {
    if (!this.noMore) this.fetch();
  }

  onSelectImage(params) {
    return () => {
      const overflow = this.uriSelected.length >= this.props.maxSelected;
      this.toggleSelected({ ...params, overflow });
    };
  }

  setSelectedAsset(assets, uriList) {
    return assets.map((data) => {
      const item = { ...data };
      if (uriList.indexOf(item.node.image.uri) > -1) {
        item.selected = true;
      }
      return item;
    });
  }

  handleItemSelect(data, overflow) {
    const item = data;
    const { uri } = item.node.image;

    if (!overflow || item.selected) {
      const selected = !item.selected;
      if (selected) {
        this.uriSelected.push(uri);
      } else {
        this.uriSelected = this.uriSelected.filter(v => v !== uri);
      }
      return { ...item, selected };
    }

    return item;
  }

  toggleSelected({ uri, rowId, colId, overflow }) {
    const { assets } = this.state;
    const { onSelect, imagesPerRow } = this.props;
    let index;

    if (typeof +rowId === 'number' && typeof +colId === 'number') {
      index = (rowId * imagesPerRow) + colId;
      const item = assets[index];
      assets[index] = this.handleItemSelect(item, overflow);
    } else {
      let it;
      assets.some((data, i) => {
        const item = data;
        if (item.node.image.uri === uri) {
          index = i;
          it = this.handleItemSelect(item, overflow);
          return true;
        }
        return false;
      });
      assets[index] = it;
    }

    this.updateAssets({ assets: [].concat(assets) });
    onSelect({
      selected: assets[index] ? !!assets[index].selected : null,
      node: assets[index],
      uri,
      uriSelected: this.uriSelected,
    });
  }

  updateAssets({ assets, batchUpdate }) {
    const { dataSource } = this.state;
    const { imagesPerRow } = this.props;

    const nextState = {
      assets,
      dataSource: dataSource.cloneWithRows(
        groupByEveryN(assets, imagesPerRow)
      ),
    };

    if (batchUpdate) return nextState;
    this.setState(nextState);
    return false;
  }

  appendAssets(data) {
    const nextAssets = data.edges;
    const nextState = { loadingMore: false };
    const { assets } = this.state;
    const hasNextPage = data.page_info.has_next_page;

    this.endCursor = data.page_info.end_cursor;

    if (!hasNextPage) {
      this.noMore = true;
    }

    if (nextAssets.length > 0) {
      nextState.lastCursor = data.page_info.end_cursor;
      Object.assign(nextState, this.updateAssets({
        assets: this.setSelectedAsset(assets.concat(nextAssets), this.uriSelected),
        batchUpdate: true,
      }));
    }

    this.setState(nextState);
  }

  fetch() {
    const { assetType } = this.props;
    const fetchParams = {
      first: this.pageSize,
      assetType,
    };

    if (this.endCursor) {
      fetchParams.after = this.endCursor;
    }

    CameraRoll.getPhotos(fetchParams)
      .then(d => this.appendAssets(d))
      /* eslint-disable no-console */
      .catch(e => console.log(e.stack));
      /* eslint-enable no-console */
  }

  renderItem(item, rowId, i) {
    if (!item) return null;
    const { gap } = this.props;
    const { uri } = item.node.image;
    const side = this.sideLength;
    const itemParams = { uri, rowId, colId: i };
    const {
      iconSelected,
      iconUnSelected,
      iconSelectedStyle,
      iconUnSelectedStyle,
    } = this.props;
    const selectProps = {
      selected: item.selected,
      iconSelected,
      iconUnSelected,
      iconSelectedStyle,
      iconUnSelectedStyle,
    };

    const itemStyle = {
      marginTop: +rowId ? gap : 0,
      marginLeft: i ? gap : 0,
      marginRight: 0,
      marginBottom: 0,
      position: 'relative',
    };

    return (
      <TouchableWithoutFeedback
        key={uri}
        onPress={this.onSelectImage(itemParams)}
      >
        <View style={itemStyle}>
          <Image source={{ uri }} style={{ width: side, height: side }} />
          <SelectTick {...selectProps} />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderRow(rowData, sectionId, rowId) {
    return (
      <View style={style.row}>
        {rowData.map((d, i) => this.renderItem(d, rowId, i))}
      </View>
    );
  }

  render() {
    return (
      <ListView
        style={this.props.style}
        enableEmptySections
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={this.sideLength}
      />
    );
  }
}

const styleShape = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.object,
  PropTypes.number,
]);

ImgRollView.propTypes = {
  /**
   * @property maxSelected
   * @type Number
   * @default 10
   * @description 最大照片选择条数
   */
  maxSelected: PropTypes.number,
  /**
   * @property gap
   * @type Number
   * @default 8
   * @description 图片间像素间隔
   */
  gap: PropTypes.number,
  /**
   * @property imagesPerRow
   * @type Number
   * @default 4
   * @description 每行显示的图片数量
   */
  imagesPerRow: PropTypes.number,
  /**
   * @property assetType
   * @type String
   * @default 'Photos'
   * @param {String} 'Photos' 图片资源
   * @param {String} 'Videos'  视频资源
   * @param {String} 'All'
   * @description 静态资源类型
   */
  assetType: PropTypes.oneOf([
    'Photos',
    'Videos',
    'All',
  ]),
  /**
   * @property onSelect
   * @type Function
   * @default () => {}
   * @description 用户选择图片时触发的回调，返回参数为 node/uri/selected/uriSelected
   */
  onSelect: PropTypes.func,
  /**
   * @property iconSelected
   * @type Element
   * @default  <Text style={style.tickInner}>v</Text>
   * @description  选中图标
   */
  iconSelected: PropTypes.element,
  /**
   * @property iconUnSelected
   * @type Element
   * @default  <Text style={style.tickInner}>x</Text>
   * @description  未选中图标
   */
  iconUnSelected: PropTypes.element,
  /**
   * @property uriList
   * @type Array
   * @default  []
   * @description  初始选中 uri
   */
  uriList: PropTypes.arrayOf(PropTypes.string),
  /**
   * @property style
   * @type Object
   * @default  null
   * @description  外层容器样式
   */
  style: styleShape,
  /**
   * @property iconSelectedStyle
   * @type Object
   * @default  null
   * @description  选中图标外框样式
   */
  iconSelectedStyle: styleShape,
  /**
   * @property iconUnSelectedStyle
   * @type Object
   * @default  null
   * @description  未选中图标外框样式
   */
  iconUnSelectedStyle: styleShape,
};

ImgRollView.defaultProps = {
  maxSelected: 10,
  gap: 8,
  imagesPerRow: 4,
  assetType: 'Photos',
  iconSelected: <Text style={style.tickInner}>v</Text>,
  iconUnSelected: <Text style={style.tickInner}>x</Text>,
  onSelect: () => {},
  uriList: [],
};

export default ImgRollView;
