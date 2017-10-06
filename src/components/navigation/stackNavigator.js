import React from 'react';
//THIS IS ROOT (STACKING AND BACKBUTTON)


import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import Tabs from './_tabNavigator.js';

//Add here the all other routes not part of the tab navigator.

let routes = {
  Home: {
    screen: Tabs
  }
}
export default stackNavigator = StackNavigator(routes);