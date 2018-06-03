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
import { connect } from 'react-redux'
import { Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { COLORS, CONFIG } from '../constants/index';

const {height, width} = Dimensions.get('window');


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chichas: [],
      latitude: null,
      longitude: null,
      adress: null,
      city: null,
      zipcode: null,
      error: null,
    };
  }

  distance(lat1, lon1, lat2, lon2, unit) {
  	var radlat1 = Math.PI * lat1/180
  	var radlat2 = Math.PI * lat2/180
  	var theta = lon1-lon2
  	var radtheta = Math.PI * theta/180
  	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  	dist = Math.acos(dist)
  	dist = dist * 180/Math.PI
  	dist = dist * 60 * 1.1515
  	if (unit=="K") { dist = dist * 1.609344 }
  	if (unit=="N") { dist = dist * 0.8684 }
  	return dist
  }

  componentDidMount() {
    if (this.props.isLogged) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("------------ latlong----------------");
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        console.log("-------------- latlong --------------");
          let call =`${CONFIG.API_LOCATION}${position.coords.latitude},${position.coords.longitude}&key=${CONFIG.API_KEY}`;
          fetch(call)
          .then(res => res.json())
          .then(res => {
            var adress = res.results[0].address_components;
            var city = adress[2].long_name;
            var zipcode = adress[adress.length - 1].long_name;
            var fullAdress = `${adress[0].long_name} ${adress[1].long_name}, ${city} ${zipcode}`
            console.log("-------------- adresse --------------");
            console.log(fullAdress);
            this.setState({ adress: fullAdress })
            let url = `${CONFIG.API_SEARCH}query=chicha+${city}+${zipcode}&location=${position.coords.latitude},${position.coords.longitude}&radius=10&key=${CONFIG.API_KEY}`;
            console.log(url);
            fetch(url)
            .then(res => res.json())
            .then(res => {
              console.log(res);
              var chicharray = [];
              for (var i = 0; i < res.results.length; i++) {
                let chicharesult = res.results[i];
                if (typeof chicharesult.photos !== 'undefined') {
                  var lat1 = chicharesult.geometry.location.lat;
                  var lon1 = chicharesult.geometry.location.lng;
                  var lat2 = position.coords.latitude;
                  var lon2 = position.coords.longitude;
                  var unit = 'K'
                  var radlat1 = Math.PI * lat1/180
                  var radlat2 = Math.PI * lat2/180
                  var theta = lon1-lon2
                  var radtheta = Math.PI * theta/180
                  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                  dist = Math.acos(dist)
                  dist = dist * 180/Math.PI
                  dist = dist * 60 * 1.1515
                  if (unit=="K") { dist = dist * 1.609344 }
                  if (unit=="N") { dist = dist * 0.8684 }
                  console.log("--------- DIST --------");
                  console.log(dist);
                  console.log("--------- DIST --------");
                  let chicha = {
                     id: i,
                     name: chicharesult.name,
                     adress: chicharesult.formatted_address,
                     rating: chicharesult.rating,
                     ref_photo: chicharesult.photos[0].photo_reference,
                     latitude: chicharesult.geometry.location.lat,
                     longitude: chicharesult.geometry.location.lng,
                     dist,
                   };
                   chicharray.push(chicha)
                   chicharray.sort(function(a, b) {
                      return a.dist - b.dist;
                    });
                }
                else {
                  console.log("--------------- ERROR PHOTOS -----------------");
                  console.log(chicharesult.name);
                  console.log("--------------- ERROR PHOTOS -----------------");
                }
              }
             this.setState({ chichas : chicharray })
            })
            return;
        })
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          city,
          zipcode,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    }
    else {
      console.log("NO LOGGED CAN'T ACESS VIEW");
    }
  }

  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name='home' type='feather' />
  ),
};
  render() {
    const chicha = this.state.chichas.map((item, index) => {
      let adresse = item.adress.replace(', France','');
      return(
        <TouchableOpacity key={item.id} style={styles.item}>
        <Image style={styles.image} source={{uri: `${CONFIG.API_IMAGE}${item.ref_photo}&key=${CONFIG.API_KEY}`}}/>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',paddingTop:10}}>
            <Text style={[{fontWeight:'bold'},styles.captionText]}>{item.name}</Text>
            <Text style={{fontSize:15}}>{item.rating}</Text>
          </View>
          <Text style={[{color:'#6c757d'},styles.captionText]}>{adresse}</Text>
      </TouchableOpacity>
      )
    })
    return (
      <View style={{flex:1,backgroundColor:"#fff"}}>
        <View style={styles.container}>
          <View style={styles.searchSection}>
            <TextInput style={{fontSize:17,width:"80%"}}
              value={this.state.adress} onSubmitEditing={()=> console.log('okkkkkkkkk')}/>
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

function mapStateToProps(state) {
  return {
    isLogged: state.isLogged
  }
}

export default connect(mapStateToProps)(HomeScreen)

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
    backgroundColor:COLORS.BLUE,
  },
  caption:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  captionText:{
    fontSize:15
  }
});
