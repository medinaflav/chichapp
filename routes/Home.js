import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TabBarIOS,
  StatusBar,
  SafeAreaView,
  Button,
  isAndroid,
  Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements'
import { COLORS } from '../constants/index';

const {height, width} = Dimensions.get('window');


class LoginScreen extends React.Component {


  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name='home' type='feather' />
  )
};
  render() {
    return (
      <View style={{flex:1,backgroundColor:"#fff"}}>
        <View style={styles.container}>
          <View style={styles.searchSection}>
            <TextInput style={styles.input} style={{height: 40,paddingRight:"15%",borderWidth: 0,margin:10,paddingLeft:10,fontSize:20}}
              value={"Efreitech Villejuif, 94800"}/>
            <Icon style={styles.searchIcon} name='navigation' type='feather' size={20}/>
          </View>
          <ScrollView style={styles.items}>
            <View style={{flexDirection: 'column',alignItems:'center'}}>
              <TouchableOpacity style={styles.item}>
              <Text>Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
              <Text>Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
              <Text>Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
              <Text>Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Text>Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Text>Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Text>Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Text>Filter</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20,
    width:width,
  },
  searchSection: {
      flexDirection: 'row',
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      borderBottomWidth:1,
      borderBottomColor:"#E6ECEF"
  },
  items:{
    paddingTop:20,
  },
  item:{
    marginBottom:10,
    height:130,
    width:width - 30,
    borderWidth:1
  },
});
