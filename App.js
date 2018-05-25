import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Button,
  isAndroid,
  AsyncStorage
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator,TabNavigator,StackNavigator } from 'react-navigation';

import LoginScreen from './routes/Login';
import HomeScreen from './routes/Home';
import SearchScreen from './routes/Search';
import StoresScreen from './routes/Stores';
import UserScreen from './routes/User';

console.disableYellowBox = true;

const TabScreenNavigator = TabNavigator({
      home: { screen: HomeScreen },
      search: { screen: SearchScreen },
      stores: { screen: StoresScreen },
      user: { screen: UserScreen },

},
{
   tabBarPosition: 'bottom',
   tabBarOptions: {
    showIcon: true,
    showLabel: false,
  }
}
);

const MainScreenNavigator = StackNavigator({

  ScreenNotOnTabbar: { screen: LoginScreen },
  Tab: { screen: TabScreenNavigator },

},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
        gesturesEnabled: false,
    }
}
);

export default class App extends React.Component {
    render() {
        return (
            <MainScreenNavigator />
        )
    }
}
