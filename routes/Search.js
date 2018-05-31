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
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Icon } from 'react-native-elements'
var filters = require('../db/filters');

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Recherche' };
  }
  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name='search' type='feather' />
  ),
};
  render() {
    const filter = filters.filter.map((item, index) => {
      return(
        <TouchableOpacity style={styles.filter}>
              <Text style={styles.textFilter}>{item.name}</Text>
        </TouchableOpacity>
      )
    })
    return (
      <View style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name='search' type='feather' size={20}/>
            <TextInput style={styles.input} style={{height: 40, borderWidth: 0,margin:10,fontSize:20}}
              onChangeText={(text) => this.setState({text})}
              placeholder={this.state.text}
              />
          </View>
          <View style={styles.filters}>
              {filter}
          </View>
        </View>
      </View>
    );
  }
}
export default SearchScreen
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20,
    backgroundColor:"#fff"
  },
  searchSection: {
      flexDirection: 'row',
      margin: 20,
  },
  filters:{
    paddingLeft:10,
    paddingRight:10,
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  filter:{
    height:130,
    width:170,
    marginBottom:10,
    marginRight:10,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
  },
  textFilter:{
    fontSize:15,
    fontWeight:'bold'
  }
});
