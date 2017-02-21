/* global someFunction it:true */
import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Index from '../Example/src';


it('renders correctly', () => {
  renderer.create(
    <Index />
  );
});
