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
class SearchScreen extends React.Component {
  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name='search' type='feather' />
  ),
};
  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#6a51ae' }]}>
        <Text style={styles.title}>Search Screen</Text>
      </View>
    );
  }
}
export default SearchScreen
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  title: {
    marginTop:250,
    textAlign:'center',
  },
});
