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
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#6a51ae' }]}>
        <Image
          style={styles.stretch}
          source={require('../img/chichApp.jpg')}
        />
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={{height: 40, borderColor: 'black', borderWidth: 2}}
          onChangeText={(text) => this.setState({input: text})}
          />
        <Text style={styles.title}>Password</Text>
        <TextInput
          style={{height: 40, borderColor: 'black', borderWidth: 2}}
          onChangeText={(text) => this.setState({input: text})}
          secureTextEntry={true}
          />
          <TouchableOpacity
          onPress={this._onPressButton}
          style={styles.button}>
          <Text> Sign In </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={this._onPressButton}
          style={styles.button}>
          <Text> Se connecter avec Google </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={this._onPressButton}
          style={styles.button}>
          <Text> Se connecter avec Facebook </Text>
          </TouchableOpacity>
          <Text style={{color: 'blue'}}
          onPress={this._onPressButton}>
          You forgot your password ?
          </Text>
          <Text style={{color: 'blue'}}
          onPress={this._onPressButton}>
          New here ? Come and sign up
          </Text>
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
    marginTop:10,
    textAlign:'center',
  },
  stretch: {
    width: 500,
    height: 200,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6a51ae',
    padding: 10
  }
});
