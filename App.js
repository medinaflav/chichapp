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
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from './routes/Login';
import HomeScreen from './routes/Home';
import ChichaScreen from './routes/Chicha';
import SearchScreen from './routes/Search';
import StoresScreen from './routes/Stores';
import UserScreen from './routes/User';

console.disableYellowBox = true;

const TabScreenNavigator = createBottomTabNavigator(
{
      home: { screen: HomeScreen },
      search: { screen: SearchScreen },
      stores: { screen: StoresScreen },
      user: { screen: UserScreen },
},
{
   initialRouteName: 'home',
   tabBarPosition: 'bottom',
   tabBarOptions: {
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: '#fff',
    }
  }
}
);
const NotOnTabScreenNavigator = createStackNavigator({
  login : {screen: LoginScreen},
  chicha : {screen: ChichaScreen}
},
{
    headerMode: 'none',
    navigationOptions:{
      headerVisible:false,
      gesturesEnabled:true
    }
}
)

const MainScreenNavigator = createStackNavigator({

  Tab: { screen: TabScreenNavigator },
  NotOnTab: { screen: NotOnTabScreenNavigator},

},
{
    initialRouteName: 'Tab',
    headerMode: 'none',
    navigationOptions:{
      headerVisible:false,
      gesturesEnabled:true
    }
}
);

export default class App extends React.Component {
    render() {
        return (
            <MainScreenNavigator/>
        )
    }
}
