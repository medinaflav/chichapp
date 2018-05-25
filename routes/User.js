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
      <View style={{flex:1}}>
        <View style={styles.container}>
          <Text style={styles.name}>Firstname Lastname</Text>
          <View style={styles.list}>
            <Text style={styles.text}>Text</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.text}>Text</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.text}>Text</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.text}>Text</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default UserScreen
const styles = StyleSheet.create({
  container: {
    marginTop:20,
    padding:10
  },
  name:{
    backgroundColor:"#f2f",
    height:70,
    padding: 30,
    marginBottom:10,
  },
  text:{
    color:"#fff",
  },
  list: {
    width:'100%',
    backgroundColor:"#000",
    height:60,
    borderWidth:1,
    borderColor:"#fff",
    padding:20
  },
});
