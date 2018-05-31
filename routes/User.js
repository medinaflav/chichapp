import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar,
  SafeAreaView,
  Button,
  isAndroid,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements'
import { COLORS, CONFIG } from '../constants/index';

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
        <View style={styles.userContainer}>
          <Text style={styles.user}>Firstname Lastname</Text>
          </View>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.text}>Se déconnecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default UserScreen
const styles = StyleSheet.create({
  container: {
    marginTop:50,
  },
  userContainer:{
    borderBottomWidth:0.2,
    borderColor:COLORS.BLUE
  },
  user:{
    height:50,
    padding: 30,
    marginBottom:10,
    fontSize:15,
  },
  list: {
    alignItems:'center',
    width:'100%',
    height:60,
    padding:20
  },
});
