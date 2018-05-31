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
var chichas = require('../db/chichas');

const {height, width} = Dimensions.get('window');


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      adress: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("----------------------------");
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        console.log("----------------------------");
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBt_Ge6IrFP3a7YnElPGqM84xw9BBekl0Q`)
          .then(res => res.json())
          .then(res => {
            var adress = res.results[0].address_components;
            var fullAdress = `${adress[0].long_name} ${adress[1].long_name}, ${adress[2].long_name} ${adress[adress.length - 1].long_name}`
            console.log(fullAdress);
            console.log("----------------------------");
            this.setState({ adress: fullAdress })
            return;
          })
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name='home' type='feather' />
  )
};
  render() {
    const chicha = chichas.chicha.map((item, index) => {
      return(
        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate("chicha",{chicha:item})}>
        <Image style={styles.image} source={require('../public/img/chicha.jpg')}/>
          <View style={styles.caption}>
            <View>
                <Text style={[{fontWeight:'bold'},styles.captionText]}>{item.name}</Text>
                <Text style={[{color:'#6c757d'},styles.captionText]}>{item.adress}</Text>
            </View>
              <Text style={styles.captionText}>{item.statut}</Text>
          </View>
        </TouchableOpacity>
      )
    })
    return (
      <View style={{flex:1,backgroundColor:"#fff"}}>
        <View style={styles.container}>
          <View style={styles.searchSection}>
            <TextInput style={{fontSize:17,width:"80%"}}
              value={this.state.adress}/>
            <Icon style={styles.positionIcon} name='navigation' type='feather' size={20}/>
          </View>
          <ScrollView style={styles.items}>
            <View style={{flexDirection: 'column',alignItems:'center'}}>
            {chicha}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:30,
    width:width,
  },
  searchSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      borderBottomWidth:1,
      borderBottomColor:"#E6ECEF",
      height: 60,
  },
  positionIcon: {
    marginRight:15,
    backgroundColor:'blue'
  },
  items:{
    paddingTop:20,
  },
  item:{
    marginBottom:40,
    height:250,
    width:width - 30,
  },
  image:{
    width:"100%",
    height:200,
    backgroundColor:'blue',
  },
  caption:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  captionText:{
    paddingTop:10,
    fontSize:15
  }
});
