/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/**
 * @providesModule BizRouter
 */
import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  Navigator,
  View,
} from 'react-native';

const Router = {
  initialRoute: null,
  navigator: null,
  pages: {},
  register(name, component) {
    if (name in Router.pages) {
      // wait for YellowBox
      setTimeout(() => {
        console.warn(`[Router] Page name '${name}' has been registered.`);
      });
    }
    Router.pages[name] = component;
  },
  open(name) {
    Router.navigator.push({
      name,
    });
  },
  back() {
    Router.navigator.pop();
  },
};

class Root extends Component {
  renderScene(route, navigator) {
    if (!Router.navigator) {
      Router.navigator = navigator;
    }
    const Comp = Router.pages[route.name];
    return <Comp />;
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Navigator
          initialRoute={Router.initialRoute}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Example', () => Root);

export default Router;
