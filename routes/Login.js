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
import { connect } from 'react-redux'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '',password:'' };
  }

  static navigationOptions = {
  tabBarVisible: false
};

onLogin(){
  const { username, password } = this.state;
  if(username !== '' && password !== '' ){
    (async () => {
    const reponse = await fetch(`${CONFIG.API_BACK}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'nickname' : username,
         password,
      }),
    });
    const content = await reponse.json();
    if (content.err) {
      console.log("----------- ERROR LOGIN ---------");
    }
    else {
    console.log("----------- TOKEN ---------");
    console.log(content.token);
    console.log("----------- TOKEN ---------");
    this.state.username = '';
    this.state.password = '';
    AsyncStorage.setItem("isLogged", content.token ).then(() => {
      this.props.dispatch({ type: 'NEW_TOKEN', payload: { isLogged: content.token } })
      this.props.navigation.navigate('home')
    })
  }
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
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder={"password"}
          placeholderTextColor={COLORS.BLUE}
          secureTextEntry={true}
          />

        <TouchableOpacity onPress={this._onPressButton} style={[styles.button,{marginTop:60}]}
        onPress={this.onLogin.bind(this)}>
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
          <TouchableOpacity style={{position:'absolute',left:0}} onPress={this._onPressButton}><Text style={{color:COLORS.BLUE}}>Forgot password ?</Text></TouchableOpacity>
          <TouchableOpacity style={{position:'absolute',right:0}} onPress={() => navigate('signup')}><Text style={{color:COLORS.BLUE}}>New here ? Sign up</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLogged: state.isLogged
  }
}

export default connect(mapStateToProps)(LoginScreen)

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
