# Drop

**掉落动画组件**

抛物线掉落动画组件，通常用于购物类交互。除了掉落组件 `Dropper` 外，Drop 还提供了另外两个非常有用的辅助组件 `Emitter` 和 `Receiver`。

## Demo

![Drop](http://wx1.sinaimg.cn/mw690/4c8b519dly1fbp9qg0mlog20ho0wghdw.gif)

## Dropper

**掉落组件**

用来包裹掉落元素，提供抛物线运动的动画。

### ⚠️ 注意

1. 必须提供起点和终点坐标，起点和终点坐标可以通过 `Emitter` 和 `Receiver` 非常方便地获取到。

2. 强烈建议提供掉落元素的宽高，这样，`Dropper` 会将自身的中心置于起点，否则置于起点的将是 `Dropper` 的左上角。

### Example

```js
import {
  Dropper,
} from 'rnx-ui/Drop';

function DropperImg(props) {
  return (
    <Dropper
      style={[styles.dropper, {
        overflow: 'hidden',
        backgroundColor: 'pink',
      }]}
      startPosition={props.startPosition}
      endPosition={props.endPosition}
      width={50}
      height={50}
      onEnd={props.onEnd}
    >
      <Image
        source={{
          uri: 'http://tva1.sinaimg.cn/crop.0.0.217.217.180/4c8b519djw8fa45br0vpxj2062062q33.jpg',
        }}
        style={{
          width: 50,
          height: 50,
        }}
      />
    </Dropper>
  );
}
```

### Props

```js
Dropper.propTypes = {
  // 起点位置
  startPosition: PropTypes.shape({
    // 水平坐标
    x: PropTypes.number,
    // 垂直坐标
    y: PropTypes.number,
  }).isRequired,
  // 终点位置
  endPosition: PropTypes.shape({
    // 水平坐标
    x: PropTypes.number,
    // 垂直坐标
    y: PropTypes.number,
  }).isRequired,
  // 掉落元素宽度
  width: PropTypes.number,
  // 掉落元素高度
  height: PropTypes.number,
  // 动画时间
  duration: PropTypes.number,
  // 弹跳的高度
  jumpHeight: PropTypes.number,
  // 缩放值
  scale: PropTypes.number,
  // 旋转角度，如 360
  rotate: PropTypes.number,
  // 动画刚开始由透明变化至不透明的时间
  showDuration: PropTypes.number,
  // 动画结束回调
  onEnd: PropTypes.func,
  // 是否需要收尾动画
  endAnimation: PropTypes.bool,
  // 收尾弹跳的高度
  endJumpHeight: PropTypes.number,
  // 收尾动画时间
  endAnimationDuration: PropTypes.number,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 自定义样式
  style: View.propTypes.style,
};
Dropper.defaultProps = {
  startPosition: {
    x: 0,
    y: 0,
  },
  endPosition: {
    x: 0,
    y: 0,
  },
  width: 0,
  height: 0,
  duration: 1000,
  jumpHeight: 60,
  scale: 1,
  rotate: 360,
  showDuration: 100,
  onEnd: NOOP,
  endAnimation: true,
  endJumpHeight: 40,
  endAnimationDuration: 400,
  children: null,
  style: null,
};
```

## Emitter

**掉落事件点击发射组件**

用来包裹掉落事件点击发射元素，提供元素中心坐标，以作为掉落动画的起点。

### Example

```js
import {
  Emitter,
} from 'rnx-ui/Drop';

function CartEmitter(props) {
  return (
    <Emitter
      ref={this.getEl}
      style={styles.all}
      onPress={props.onPress}
    >
      <Cart />
    </Emitter>
  );
}
```

### Props

```js
Emitter.propTypes = {
  // 点击回调，参数为点击元素中心坐标，如：{x: 0, y: 0}
  onPress: PropTypes.func,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 自定义样式
  style: View.propTypes.style,
};
Emitter.defaultProps = {
  onPress: NOOP,
  children: null,
  style: null,
};
```

## Receiver

**掉落元素接受组件**

用来包裹掉落元素接受元素，如果该元素是绝对定位，定位的样式应该写在 `Receiver` 或父元素上，而不应该写在子元素上。`Receiver` 主要提供以下功能：

1. 提供元素中心坐标，以作为掉落动画的终点；

2. 提供掉落组件到达时的响应动画，需要在 `Dropper` 元素的 `onEnd` 回调中手动调用 `Receiver` 元素的 `animate` 方法。

### Example

```js
import {
  Receiver,
} from 'rnx-ui/Drop';
import Badge from 'rnx-ui/Drop';

function CartReceiver(props) {
  return (
    <Receiver
      ref={props.getEl}
      getCenterPosition={props.getCenterPosition}
      style={styles.all}
    >
      <Badge
        text={props.count}
        textContainerStyle={styles.textContainer}
      >
        <Cart
          style={styles.cart}
          iconStyle={styles.icon}
        />
      </Badge>
    </Receiver>
  );
}
```

### Props

```js
Receiver.propTypes = {
  // 获取中心位置回调
  getCenterPosition: PropTypes.func,
  // 获取元素回调
  getEl: PropTypes.func,
  // 缩放值
  scale: PropTypes.number,
  // 动画时间
  duration: PropTypes.number,
  // 自定义样式
  style: View.propTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 布局回调
  onLayout: PropTypes.func,
};
Receiver.defaultProps = {
  getCenterPosition: NOOP,
  getEl: NOOP,
  scale: 1.1,
  duration: 300,
  style: null,
  children: null,
  onLayout: NOOP,
};
```
