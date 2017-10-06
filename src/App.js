import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StackNavigation from './components/navigation/stackNavigator.js';


export default class App extends React.Component {
  render() {
    return (
      <StackNavigation />
    );
  }
}