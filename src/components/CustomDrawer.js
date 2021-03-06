import React from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
  } from 'react-native';
import { DrawerContentScrollView,DrawerItemList} from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import AsyncStorage from '@react-native-community/async-storage';
import { signOut } from '../actions'; 
import { connect } from 'react-redux';

const CustomDrawer = (props) => {
  const logout = async() => {
    try {
      await AsyncStorage.removeItem('user_values');
      console.log("item removed user_values")
      props.signOut();
    } catch(e) {
      console.log(e);
    }
  }
    return (
        <View style={{flex: 1}}>
          <DrawerContentScrollView
            {...props}
            contentContainerStyle={{backgroundColor: '#8200d6'}}>
            <ImageBackground
              source={require('../images/menu-bg.jpeg')}
              style={{padding: 20}}>
              <Image
                source={require('../images/user-profile.jpg')}
                style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                  marginBottom: 5,
                }}>
                John Doe
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'Roboto-Regular',
                    marginRight: 5,
                  }}>
                abc@gmail.com
                </Text>
            
              </View>
            </ImageBackground>
            <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
              <DrawerItemList {...props} />
            </View>
          </DrawerContentScrollView>
          <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="user" size={18} color={Colors.dark} />
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Roboto-Medium',
                    marginLeft: 5, color:Colors.dark
                  }}>
                  Tell a Friend
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="user" size={18} color={Colors.dark} />
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Roboto-Medium',
                    marginLeft: 5,
                    color:Colors.dark
                  }} onPress={logout}>
                  Sign Out
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
const mapStateToProps = (state) => {
  // console.log(state);
 return {auth : state.auth};
}
export default connect(mapStateToProps,{signOut})(CustomDrawer);
     