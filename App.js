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
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import LoginScreen from './routes/Login';
import SignupScreen from './routes/Signup';
import HomeScreen from './routes/Home';
import ChichaScreen from './routes/Chicha';
import SearchScreen from './routes/Search';
import StoresScreen from './routes/Stores';
import UserScreen from './routes/User';

console.disableYellowBox = true;

const initial_state = {
  is_loading: false,
  isLogged: '',
};
var routes;

function reducer(state = initial_state, action) {
  switch (action.type) {
    case 'NEW_TOKEN':
      return Object.assign({}, state,{ isLogged: action.payload.isLogged })
    case 'CLEAR_TOKEN':
      return Object.assign({}, state,{
        isLogged: ''
      })
    default:
      return state
  }
}

console.log("------------------- IS LOGGED -----------");
console.log(initial_state.isLogged);
console.log("------------------- IS LOGGED -----------");

if (initial_state.isLogged) {
  routes = 'Tab'
}else {
  routes = 'NotOnTab'
}

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
  signup : {screen: SignupScreen},
  chicha : {screen: ChichaScreen}
},
{
    headerMode: 'none',
    navigationOptions:{
      headerVisible:false,
      gesturesEnabled:false
    }
}
)

const MainScreenNavigator = createStackNavigator({

  Tab: { screen: TabScreenNavigator },
  NotOnTab: { screen: NotOnTabScreenNavigator},

},
{
    initialRouteName: routes,
    headerMode: 'none',
    navigationOptions:{
      headerVisible:false,
      gesturesEnabled:true
    }
}
);

const store = createStore(reducer);


export default class App extends React.Component {
    render() {
        return (
          <Provider store={store}>
            <MainScreenNavigator/>
          </Provider>
        )
    }
}
