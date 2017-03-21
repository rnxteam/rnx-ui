import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import {
  NavBar,
} from 'BizComponent';
import Router from 'BizRouter';
import All from 'rnx-ui/All';
import RefreshView, {
  RefreshControl,
} from 'rnx-ui/RefreshView';

import styles from './styles.js';

const imgLoadingCicleDark = require('../../../asset/image/loadingCicleDark.png');
const imgLoadingPointerDark = require('../../../asset/image/loadingPointerDark.png');

function generateList(len) {
  let i = 0;
  const res = [];
  while (i < len) {
    i += 1;
    res.push(`${i}`);
  }
  return res;
}

const REFRESH_PROMOT = {
  inital: '下拉刷新',
  ready: '松开刷新',
  loading: '正在刷新...',
  success: '刷新成功',
};
const LOAD_PROMOT = {
  inital: '上拉加载更多',
  loading: '加载中...',
  noMore: '没有更多了',
};

class Page extends Component {
  static section = 'Data Display';

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      deg: 0,
      refreshPromot: REFRESH_PROMOT.inital,
      list: generateList(15),
      loadPromot: LOAD_PROMOT.inital,
    };

    this.onPull = this.onPull.bind(this);
    this.onPulling = this.onPulling.bind(this);
    this.onReadyToRefresh = this.onReadyToRefresh.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.onEndReached = this.onEndReached.bind(this);

    this.isHandingLoadMore = false;
    // 是否还有更多数据
    this.isMore = true;
  }

  onPull() {
    this.setState({
      refreshPromot: REFRESH_PROMOT.inital,
    });
  }
  onPulling(p) {
    this.setState({
      deg: p * 3,
    });
  }
  onReadyToRefresh() {
    if (!this.state.isRefreshing) {
      this.setState({
        refreshPromot: REFRESH_PROMOT.ready,
      });
    }
  }
  onRefresh() {
    this.setState({
      isRefreshing: true,
      refreshPromot: REFRESH_PROMOT.loading,
    });
    this.rotateStart();
    setTimeout(() => {
      this.setState({
        refreshPromot: REFRESH_PROMOT.success,
        list: generateList(20),
      });
      this.rotateStop();
      setTimeout(() => {
        this.setState({
          isRefreshing: false,
          refreshPromot: REFRESH_PROMOT.inital,
        });
      }, 500);
    }, 1000);
  }

  onEndReached() {
    if (this.isHandingLoadMore || !this.isMore) {
      return;
    }
    this.isHandingLoadMore = true;
    this.setState({
      loadPromot: LOAD_PROMOT.loading,
    });
    setTimeout(() => {
      const listLen = this.state.list.length;
      if (listLen < 30) {
        this.setState({
          list: generateList(listLen + 10),
        });
      } else {
        // no more data
        this.isMore = false;
        this.setState({
          loadPromot: LOAD_PROMOT.noMore,
        });
      }
      this.isHandingLoadMore = false;
    }, 1000);
  }

  rotateStart() {
    const t = 16;
    const v = 1;
    this.intervalId = setInterval(() => {
      this.setState({
        deg: this.state.deg + (v * t),
      });
    }, t);
  }

  rotateStop() {
    clearInterval(this.intervalId);
  }

  render() {
    const refreshControl = (
      <RefreshControl
        refreshing={this.state.isRefreshing}
        style={styles.refreshControl}
        onPull={this.onPull}
        onPulling={this.onPulling}
        onReadyToRefresh={this.onReadyToRefresh}
        onRefresh={this.onRefresh}
      >
        <View style={styles.loader}>
          <Image source={imgLoadingCicleDark} style={styles.cicle} />
          <Image
            source={imgLoadingPointerDark}
            style={[styles.pointer, {
              transform: [{
                rotate: `${this.state.deg}deg`,
              }],
            }]}
          />
        </View>
        <Text style={styles.loaderText}>{this.state.refreshPromot}</Text>
      </RefreshControl>
    );
    return (
      <All>
        <NavBar title="RefreshView" />
        <RefreshView
          refreshControl={refreshControl}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={20}
        >
          {
            this.state.list.map((item, index) => (
              <View
                key={`tooltip-demo-${index}`}
                style={styles.item}
              >
                <Text>{item}</Text>
              </View>
            ))
          }
          <Text style={styles.loadPromot}>{this.state.loadPromot}</Text>
        </RefreshView>
      </All>
    );
  }
}

Router.register('RefreshView', Page);

export default Page;
