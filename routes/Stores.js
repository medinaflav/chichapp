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
import { Icon } from 'react-native-elements'
class StoresScreen extends React.Component {
  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name='shopping-cart' type='feather'/>
  ),
};
  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#6a51ae' }]}>
        <Text style={styles.title}>Home2 Screen</Text>
      </View>
    );
  }
}
export default StoresScreen
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  title: {
    marginTop:250,
    textAlign:'center',
  },
});
