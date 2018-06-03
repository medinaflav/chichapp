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
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { Icon } from 'react-native-elements'
import { COLORS, CONFIG } from '../constants/index';
import { connect } from 'react-redux';
class UserScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username : '',
    };
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='user' type='feather'/>
    ),
  };

  onLogout(){
    AsyncStorage.removeItem("isLogged");
    AsyncStorage.removeItem("username");
    this.setState({ username: '' });
    this.props.dispatch({ type: 'CLEAR_TOKEN'})
    this.props.navigation.navigate('login')
  }
  componentWillMount(){
    // try{
    // AsyncStorage.getItem('isLogged').then((result) => {
    //   if (result) {
    //     console.log('------a');
    //     console.log(result);
    //     fetch(`${CONFIG.API_BACK}/users/1`, {
    //       method: "GET",
    //       headers: {
    //         'Authorization': 'Bearer ' + result
    //       }
    //     }).then(res => {
    //       console.log(res);
    //     })
    //     }
    //   })
    // }catch(error){
    //   console.log(error);
    // }
    try{
    AsyncStorage.getItem('username').then((result) => {
      if (result) {
        this.setState({ username: result });
        }
      })
    }catch(error){
      console.log(error);
    }
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:"#fff"}}>
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <Text style={styles.user}>{this.state.username}</Text>
          </View>
          <TouchableOpacity onPress={() => this.onLogout()} style={styles.list}>
            <Text style={styles.text}>Se déconnecter</Text>
          </TouchableOpacity>
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

export default connect(mapStateToProps)(UserScreen)

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
    textAlign:'center'
  },
  list: {
    alignItems:'center',
    width:'100%',
    height:60,
    padding:20
  },
});
