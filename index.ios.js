/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './components/app';

export default class SGApp extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('SGApp', () => SGApp);
