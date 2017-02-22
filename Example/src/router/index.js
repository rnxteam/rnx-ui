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
