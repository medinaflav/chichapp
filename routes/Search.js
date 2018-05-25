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
  TextInput
} from 'react-native';
import { Icon } from 'react-native-elements'
class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name='search' type='feather' />
  ),
};
  render() {
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
            <View style={{flexDirection: 'column'}}>
              <View style={styles.filter}>
              <Text>Filter</Text>
              </View>
              <View style={styles.filter}>
              <Text>Filter</Text>
              </View>
              <View style={styles.filter}>
              <Text>Filter</Text>
              </View>
              <View style={styles.filter}>
              <Text>Filter</Text>
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <View style={[styles.filter,styles.marginfilter]}>
                <Text>Filter</Text>
              </View>
              <View style={[styles.filter,styles.marginfilter]}>
                <Text>Filter</Text>
              </View>
              <View style={[styles.filter,styles.marginfilter]}>
                <Text>Filter</Text>
              </View>
              <View style={[styles.filter,styles.marginfilter]}>
                <Text>Filter</Text>
              </View>
            </View>
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
  },
  searchSection: {
      flexDirection: 'row',
      margin: 20,
  },
  filters:{
    paddingLeft:10,
    paddingRight:10,
    flexDirection: 'row',
  },
  filter:{
    height:130,
    width:170,
    marginBottom:10,
    borderWidth:1
  },
  marginfilter:{
    marginLeft:10,
  }
});
