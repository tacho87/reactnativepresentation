import React from 'react';
//ONLY TAB STUFF
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {
  Ionicons
} from '@expo/vector-icons';

import {
  TabNavigator
} from 'react-navigation';


import HomeScreen from '../home/homeScreen.js';
import SearchScreen from '../search/searchScreen.js';

let routes = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home Screen',
      tabBarLabel: 'Main',
      tabBarIcon: ({
        tintColor
      }) => {

      }
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      title: 'Search Screen',
      tabBarLabel: 'Search',
      tabBarIcon: ({
        tintColor
      }) => {

      }
    }
  }
}



const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});



export default tabNavigator = TabNavigator(routes, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});