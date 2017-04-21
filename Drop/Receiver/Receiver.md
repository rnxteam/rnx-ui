#### Example

```JavaScript
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
