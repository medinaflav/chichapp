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
  AsyncStorage,
  Alert
} from 'react-native';
import { Icon } from 'react-native-elements';
import { COLORS, CONFIG } from '../constants/index';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password:'',
      confirmPassword:''
    };
  }

  static navigationOptions = {
  tabBarVisible: false
};

onSignup(){
  const { username, email, password, confirmPassword } = this.state;
  if(username !== '' && email !== '' && password !== '' && confirmPassword !== ''){
    (async () => {
    const reponse = await fetch('https://chichappbackend.herokuapp.com/api/auth/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'nickname' : username,
        email,
        password,
        'password_confirmation' : confirmPassword
      }),
    });
    const content = await reponse.json();
    console.log(content);
    this.props.navigation.navigate('login')
})();
  }
  else {
    console.log('no');
  }
}

render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.container, { backgroundColor: '#fff' }]}>
        <Image style={styles.stretch} source={require('../public/img/chichapp2.png')}/>
        <TextInput style={[styles.input,{marginTop:30}]}
          value={this.state.username}
          onChangeText={(username) => this.setState({username})}
          placeholder={"username"}
          placeholderTextColor={COLORS.BLUE}
          />
          <TextInput style={[styles.input,{marginTop:10}]}
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            placeholder={"email"}
            placeholderTextColor={COLORS.BLUE}
            />
        <TextInput style={[styles.input,{marginTop:10}]}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder={"password"}
          placeholderTextColor={COLORS.BLUE}
          secureTextEntry={true}
          />
          <TextInput style={[styles.input,{marginTop:10}]}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            value={this.state.confirmPassword}
            placeholder={"confirm password"}
            placeholderTextColor={COLORS.BLUE}
            secureTextEntry={true}
            />

        <TouchableOpacity onPress={this._onPressButton} style={[styles.button,{marginTop:60}]}
        onPress={this.onSignup.bind(this)}>
          <Text style={styles.textButton}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default SignupScreen

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
