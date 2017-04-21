#### Example

```JavaScript
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

### ⚠️ 注意

1. 必须提供起点和终点坐标，起点和终点坐标可以通过 `Emitter` 和 `Receiver` 非常方便地获取到。

2. 强烈建议提供掉落元素的宽高，这样，`Dropper` 会将自身的中心置于起点，否则置于起点的将是 `Dropper` 的左上角。