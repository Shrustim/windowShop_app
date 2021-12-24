import React from 'react'
import {  Text, View,TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import { connect } from 'react-redux';
const Header = ({navigation,main,cart}) => {
    return(
        <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 55,
         backgroundColor:"#0f1015"
        }}>
        <TouchableOpacity
          style={{ padding: 10,paddingLeft:25,paddingTop:15 }}
          onPress={() => {
            main ?   navigation.openDrawer() :
            navigation.goBack()
          }}>
          <Text>
              {main ?
              <Icon name="list" size={19} color={Colors.white
          } style={{marginBottom:5}} /> :
          <Icon name="arrow-left" size={16} color={Colors.white
          } style={{marginBottom:5}} />
           }
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 0 }}
          onPress={() => {
            navigation.navigate('Home')
          }}>
        
          <Image
  style={{width:150,height:50 ,resizeMode: "contain"}}
  source={require("../images/logo.jpg")}
  // source={{
  //   uri: logo,
  // }}
/>
        
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 10 ,paddingRight:25,paddingTop:15}}
          onPress={() => {
            navigation.navigate('Cart')
          }}>
          <Text style={{color:Colors.white}}><Icon name="shopping-cart" size={19} color={Colors.white} style={{marginBottom:10}} /> ({cart.cart.length > 0  ? cart.cart.length : 0})</Text>
        </TouchableOpacity>
      </View>
    )
}
 const mapStateToProps = (state) => {
  // console.log(state);
 return {cart : state.cart};
}
export default connect(mapStateToProps)(Header);