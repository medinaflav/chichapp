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
          source={require('./gouki.jpg')}
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
          <TouchableOpacity onPress={this._onPressButton}>
          <Text style={styles.title}> Sign In </Text>
          </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent:'center'

  }
});
