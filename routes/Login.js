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
const colors = {blue:"#133242"};

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '',password:'' };
  }

  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name='home' type='feather' />
  ),
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
          placeholder={"email"}
          placeholderTextColor={colors.blue}
          />
        <TextInput style={[styles.input,{marginTop:10}]}
          onChangeText={(text) => this.setState({text})}
          value={this.state.password}
          placeholder={"password"}
          placeholderTextColor={colors.blue}
          secureTextEntry={true}
          />

        <TouchableOpacity onPress={this._onPressButton} style={[styles.button,{marginTop:60}]}
        onPress={() =>
          navigate('home')
        }>
          <Text style={styles.textButton}> Sign In </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row',}}>
          <View style={{borderTopColor:colors.blue,borderTopWidth: 1,width:"35%",marginTop:10}}/>
          <Text style={{paddingRight:5,paddingLeft:5,fontSize:15}} >or</Text>
          <View style={{borderTopColor:colors.blue,borderTopWidth: 1,width:"35%",marginTop:10}}/>
        </View>
        <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
          <Text style={styles.textButton}> Sign in with Facebook </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row',position:'absolute',bottom:0,marginBottom:50,backgroundColor:'red',width:'90%'}}>
          <Text style={{color:colors.blue,position:'absolute',left:0}} onPress={this._onPressButton}>Forgot password ?</Text>
          <Text style={{color:colors.blue,position:'absolute',right:0}} onPress={this._onPressButton}>New here ? Sign up</Text>
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
    borderBottomColor:colors.blue,
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
    backgroundColor:colors.blue,
    width:"80%",
    height:55
  },
  textButton:{
    color:"#fff"
  }
});
