/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import * as React from 'react';
 import { Button, Text, View,StyleSheet } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreenn from "./src/HomeScreen";
import LoginScreen from "./src/LoginScreen";
import ProductList from "./src/ProductList";
import ProductDetail from "./src/ProductDetail";
import ProfileScreen from "./src/ProfileScreen";
import Cart from "./src/Cart";
import Register from "./src/Register";


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}




const Drawer = createDrawerNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Decorate" drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Decorate" component={HomeScreenn} />
        <Drawer.Screen name="ProductList" component={ProductList} />
        <Drawer.Screen name="ProductDetail" component={ProductDetail} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Registration" component={Register} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="PlaceOrder" component={ProfileScreen} />
        <Drawer.Screen name="OrderDetail" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  sectionContainer: {
   backgroundColor:'white',
   padding : 100 ,
   margin : 20 ,
   height: '100%'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


