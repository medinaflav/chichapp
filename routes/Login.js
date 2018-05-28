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
  isAndroid,
  AsyncStorage
} from 'react-native';
import { Icon } from 'react-native-elements'
import { COLORS } from '../constants/index';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '',password:'' };
  }

  static navigationOptions = {
  tabBarVisible: false
};
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.container, { backgroundColor: '#fff' }]}>
        <Image style={styles.stretch} source={require('../public/img/chichapp2.png')}/>

        <TextInput style={[styles.input,{marginTop:30}]}
          onChangeText={(text) => this.setState({text})}
          value={this.state.email}
          placeholder={"username"}
          placeholderTextColor={COLORS.BLUE}
          />
        <TextInput style={[styles.input,{marginTop:10}]}
          onChangeText={(text) => this.setState({text})}
          value={this.state.password}
          placeholder={"password"}
          placeholderTextColor={COLORS.BLUE}
          secureTextEntry={true}
          />

        <TouchableOpacity onPress={this._onPressButton} style={[styles.button,{marginTop:60}]}
        onPress={() =>
          AsyncStorage.setItem("logIn", "true").then(() => {
            navigate('home');
          })
        }>
          <Text style={styles.textButton}> Sign In </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row',}}>
          <View style={{borderTopColor:COLORS.BLUE,borderTopWidth: 1,width:"35%",marginTop:10}}/>
          <Text style={{paddingRight:5,paddingLeft:5,fontSize:15}} >or</Text>
          <View style={{borderTopColor:COLORS.BLUE,borderTopWidth: 1,width:"35%",marginTop:10}}/>
        </View>
        <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
          <Text style={styles.textButton}> Sign in with Facebook </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row',position:'absolute',bottom:0,marginBottom:50,backgroundColor:'red',width:'90%'}}>
          <TouchableOpacity style={{color:COLORS.BLUE,position:'absolute',left:0}} onPress={this._onPressButton}><Text>Forgot password ?</Text></TouchableOpacity>
          <TouchableOpacity style={{color:COLORS.BLUE,position:'absolute',right:0}} onPress={this._onPressButton}><Text>New here ? Sign up</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center"
  },
  title: {
    marginTop:10,
    textAlign:'center',
  },
  input:{
    height: 50,
    borderBottomColor:COLORS.BLUE,
    borderBottomWidth: 1,
    width:"80%",
    paddingLeft:5,
    paddingBottom:15,
    paddingTop:15
  },
  stretch: {
    resizeMode:"contain",
    marginTop:60,
    width: 150,
    height: 150,
  },
  button: {
    alignItems: 'center',
    textAlign:'center',
    padding: 20,
    marginTop:10,
    marginBottom:10,
    backgroundColor:COLORS.BLUE,
    width:"80%",
    height:55
  },
  textButton:{
    color:"#fff"
  }
});
