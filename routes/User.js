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
class UserScreen extends React.Component {
  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name='user' type='feather'/>
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
export default UserScreen
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  title: {
    marginTop:250,
    textAlign:'center',
  },
});
