import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
} from 'react-native';
import All from 'rnx-ui/All';
import Btn from 'rnx-ui/Btn';
import {
  NavBar,
} from 'BizComponent';
import Router from 'BizRouter';

import CardView from 'rnx-ui/CardView';

function makeRandomData() {
  const len = 3 + Math.floor(Math.random() * 3);
  const data = [];
  for (let i = 0; i < len; i += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r},${g},${b})`;
    data.push(color);
  }
  return data;
}

const styles = StyleSheet.create({
  cardView: {
    height: 200,
  },
  cardViewContainer: {
    paddingVertical: 30,
  },
  card: {
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCard: {
    transform: [{
      scale: 1.1,
    }],
  },
  cardText: {
    color: '#fff',
    fontSize: 30,
  },
  btns: {
    paddingHorizontal: 10,
  },
  btn: {
    marginBottom: 5,
  },
});

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      // 当前可访问的最大题目序号
      // cardViewMaxIndex: 1,
    };

    this.width = Dimensions.get('window').width;
    this.cardWidth = this.width - 100;
    this.currentCardIndex = 0;

    this.getCardView = this.getCardView.bind(this);
    this.onChange = this.onChange.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.goThird = this.goThird.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.updateCards();
  }

  onCardPress() {
    /* eslint-disable */
    alert('Pressed!');
    /* eslint-enable */
  }

  onChange(index) {
    this.currentCardIndex = index;
  }

  getCardView(cardView) {
    this.cardView = cardView;
  }

  // 更新卡片数据
  updateCards() {
    const arr = [];
    const data = makeRandomData();

    data.forEach((item, index) => {
      arr.push({
        key: index,
        card: (
          <View
            style={[styles.card, {
              backgroundColor: item,
            }]}
          >
            <Text style={styles.cardText} onPress={this.onCardPress} >
              {index}
            </Text>
          </View>
        ),
      });
    });

    this.setState({
      cards: arr,
    });
  }

  goNext() {
    if (this.cardView) {
      this.cardView.scrollToCard(this.currentCardIndex + 1);
    }
  }
  goPrev() {
    if (this.cardView) {
      this.cardView.scrollToCard(this.currentCardIndex - 1);
    }
  }
  goThird() {
    if (this.cardView) {
      this.cardView.scrollToCard(2);
    }
  }
  refresh() {
    this.updateCards();
  }

  render() {
    return (
      <All>
        <NavBar title="CardView" />
        <CardView
          getEl={this.getCardView}
          style={styles.cardView}
          activeCardStyle={styles.activeCard}
          contentContainerStyle={styles.cardViewContainer}
          cards={this.state.cards}
          cardWidth={this.cardWidth}
          cardGap={20}
          onChange={this.onChange}
          minGestureDistance={50}
          maxIndex={this.state.cardViewMaxIndex}
        />
        <View style={styles.btns}>
          <Btn style={styles.btn} onPress={this.goNext}>
            下一个
          </Btn>
          <Btn style={styles.btn} onPress={this.goPrev}>
            上一个
          </Btn>
          <Btn style={styles.btn} onPress={this.goThird}>
            第三个
          </Btn>
          <Btn style={styles.btn} onPress={this.refresh}>
            刷新卡片
          </Btn>
        </View>
      </All>
    );
  }
}

Router.register('CardView', Page);

export default Page;
