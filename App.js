import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Button,
  isAndroid
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './routes/Home';
import SearchScreen from './routes/Search';
import StoresScreen from './routes/Stores';
import UserScreen from './routes/User';

console.disableYellowBox = true;

export default createBottomTabNavigator(
  {
    home: { screen: HomeScreen },
    search: { screen: SearchScreen },
    stores: { screen: StoresScreen },
    user: { screen: UserScreen },
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);
