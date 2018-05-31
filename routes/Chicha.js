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
import { Icon } from 'react-native-elements';
import { COLORS, CONFIG } from '../constants/index';

const {height, width} = Dimensions.get('window');


class ChichaScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    console.log(params);
    return (
      <View style={{flex:1,backgroundColor:"#fff"}}>
          <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri: `${CONFIG.API_IMAGE}${params.chicha.ref_photo}&key=${CONFIG.API_KEY}`}}/>
            <View style={styles.item}>
              <Text>{params.chicha.name}</Text>
              <Text>{params.chicha.adress}</Text>
              <Text>{params.chicha.statut}</Text>
            </View>
          </ScrollView>
      </View>
    );
  }
}
export default ChichaScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:40,
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
    backgroundColor:COLORS.BLUE
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
