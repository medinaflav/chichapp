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
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#6a51ae' }]}>
        <Text style={styles.title}>Home Screen</Text>
      </View>
    );
  }
}
export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  title: {
    marginTop:250,
    textAlign:'center',
  },
});
