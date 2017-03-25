import React, {
  Component,
  PropTypes,
} from 'react';
import {
  View,
  Image,
} from 'react-native';

import Key from './Key';
import styles from './styles';

const delImgSource = require('./images/icon_delete.png');

const KEYS = [
  [{
    value: '1',
  }, {
    value: '2',
  }, {
    value: '3',
  }],
  [{
    value: '4',
  }, {
    value: '5',
  }, {
    value: '6',
  }],
  [{
    value: '7',
  }, {
    value: '8',
  }, {
    value: '9',
  }],
];

const DELETE_KEY = 'DELETE';

const NOOP = () => {};

class NumericKeyboard extends Component {
  render() {
    return (
      <View style={[styles.all, this.props.style]}>
        {
          KEYS.map((line, lineLndex) => (
            <View
              key={lineLndex}
              style={styles.line}
            >
              {
                line.map((item, index) => {
                  const isFirst = index === 0;
                  return (
                    <Key
                      key={index}
                      isFirst={isFirst}
                      value={item.value}
                      onPress={this.props.onPress}
                    >
                      {item.value}
                    </Key>
                  );
                })
              }
            </View>
          ))
        }
        <View
          style={styles.line}
        >
          <Key
            isFirst
            disabled
            type="dark"
          />
          <Key
            value="0"
            onPress={this.props.onPress}
          >
            0
          </Key>
          <Key
            value={DELETE_KEY}
            type="dark"
            onPress={this.props.onPress}
          >
            {this.props.deleteKeyContent}
          </Key>
        </View>
      </View>
    );
  }
}

NumericKeyboard.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 按键回调
  onPress: PropTypes.func,
  // 删除键内容
  deleteKeyContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
};
NumericKeyboard.defaultProps = {
  style: null,
  onPress: NOOP,
  deleteKeyContent: <Image source={delImgSource} />,
};

export default NumericKeyboard;
