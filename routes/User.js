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

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='user' type='feather'/>
    ),
  };

  onLogout(){
    AsyncStorage.removeItem("isLogged");
    this.props.dispatch({ type: 'CLEAR_TOKEN'})
    this.props.navigation.navigate('login')
  }

  render() {
    return (
      <View style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <Text style={styles.user}>Firstname Lastname</Text>
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
  },
  list: {
    alignItems:'center',
    width:'100%',
    height:60,
    padding:20
  },
});
