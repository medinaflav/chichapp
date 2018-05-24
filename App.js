import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar,
  SafeAreaView,
  Button,
  isAndroid
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './routes/Home';

console.disableYellowBox = true;

const RootStack = createStackNavigator(
  {
    home: { screen: HomeScreen },
  },
  {
    headerMode: 'none',
  }
);

export default class App extends React.Component {
    render() {
        return (
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <RootStack />
            </View>
            <View>
                <TabBarIOS>
                  <TabBarIOS.Item systemIcon="bookmarks">
                    <View>
                      <Text>TAB</Text>
                    </View>
                  </TabBarIOS.Item>
                  <TabBarIOS.Item systemIcon="bookmarks">
                    <View>
                      <Text>TAB</Text>
                    </View>
                  </TabBarIOS.Item>
                  <TabBarIOS.Item systemIcon="bookmarks">
                    <View>
                      <Text>TAB</Text>
                    </View>
                  </TabBarIOS.Item>
                </TabBarIOS>
              </View>
            </View>
        )
    }
}
