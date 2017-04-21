#### Example

```JavaScript
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