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
import { Icon } from 'react-native-elements';
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
      error: null,
    };
  }
  componentDidMount() {
    console.log("----------------- is LOGGED --------------");
    console.log(this.props.isLogged);
    if (this.props.isLogged) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("----------------------------");
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        console.log("----------------------------");
        console.log("------------ CALL ----------------");
          let call =`${CONFIG.API_LOCATION}${position.coords.latitude},${position.coords.longitude}&key=${CONFIG.API_KEY}`;
          console.log(call);
        console.log("------------ CALL ----------------");
          fetch(call)
          .then(res => res.json())
          .then(res => {
            var adress = res.results[0].address_components;
            var fullAdress = `${adress[0].long_name} ${adress[1].long_name}, ${adress[2].long_name} ${adress[adress.length - 1].long_name}`
            console.log("-------------- adresse --------------");
            console.log(res);
            console.log(fullAdress);
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
    fetch(`${CONFIG.API_BACK}/hookahs`)
    .then(res => res.json())
    .then(res => {
      console.log("------------- res ---------------");
      this.setState({ chichas : res.hookahs })
      return;
    })
    }
    else {
      console.log("----------------------------");
      console.log("----------------------------");
      console.log("----------------------------");
      console.log("no");
    }
  }

  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name='home' type='feather' />
  )
};
  render() {
    const chicha = this.state.chichas.map((item, index) => {
      let adresse = item.adress.replace(', France','');
      return(
        <TouchableOpacity key={item.id} style={styles.item} onPress={() => this.props.navigation.navigate("chicha",{chicha:item})}>
        <Image style={styles.image} source={{uri: `${CONFIG.API_IMAGE}${item.ref_photo}&key=${CONFIG.API_KEY}`}}/>
          <View style={styles.caption}>
            <View>
                <Text style={[{fontWeight:'bold'},styles.captionText]}>{item.name}</Text>
                <Text style={[{color:'#6c757d'},styles.captionText]}>{adresse}</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  captionText:{
    paddingTop:10,
    fontSize:15
  }
});
