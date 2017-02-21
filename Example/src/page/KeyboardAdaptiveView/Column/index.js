import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
} from 'react-native';

import KeyboardAdaptiveView, {
  keyboardDismissMode,
} from 'rnx-ui/KeyboardAdaptiveView';


const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
  },
  column: {
    flex: 1,
  },
  placeholder: {
    height: 500,
    borderWidth: 1,
  },
  inputWrapper: {
    height: 100,
    borderWidth: 1,
  },
  input: {
    flex: 1,
  },
});

class Column extends Component {
  constructor(props) {
    super(props);
    this.getKeyboardAdaptiveView = this.getKeyboardAdaptiveView.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus(e) {
    if (this.keyboardAdaptiveView) {
      this.keyboardAdaptiveView.inputFocusHandle(e);
    }
  }
  getKeyboardAdaptiveView(el) {
    this.keyboardAdaptiveView = el;
  }

  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        keyboardDismissMode={keyboardDismissMode}
      >
        <KeyboardAdaptiveView
          getEl={this.getKeyboardAdaptiveView}
        >
          <View style={styles.placeholder}>
            <Text>Placeholder 1</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="single line 1"
              style={styles.input}
              onFocus={this.onFocus}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              multiline
              placeholder="multi line 1"
              style={styles.input}
              onFocus={this.onFocus}
            />
          </View>
          <View style={styles.placeholder}>
            <Text>Placeholder 2</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="single line 2"
              style={styles.input}
              onFocus={this.onFocus}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              multiline
              placeholder="multi line 2"
              style={styles.input}
              onFocus={this.onFocus}
            />
          </View>
        </KeyboardAdaptiveView>
      </ScrollView>
    );
  }
}

export default Column;
