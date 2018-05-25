import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  TabBarIOS,
  StatusBar,
  SafeAreaView,
  Button,
  isAndroid
} from 'react-native';
import { Icon } from 'react-native-elements'


class LoginScreen extends React.Component {
  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name='home' type='feather' />
  )
};
  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#fff' }]}>
      </View>
    );
  }
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    color:"#fff",
    alignItems:"center"
  },
  title: {
    marginTop:10,
    textAlign:'center',
  },
  input:{
    height: 40,
    borderBottomColor: '#133242',
    borderBottomWidth: 1,
    width:"80%",
    color:"#fff",
    paddingLeft:5,
    paddingBottom:25,
    paddingTop:25
  },
  stretch: {
    resizeMode:"contain",
    marginTop:40,
    width: 150,
    height: 150,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    marginTop:10,
    marginBottom:10,
    backgroundColor:"#133242",
    width:"80%",
  },
  textButton:{
    color:"#fff"
  }
});
