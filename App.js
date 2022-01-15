import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {checkUserLoginOrNot } from './src/actions'; 
import Register from "./src/Register";
import LoginScreen from "./src/LoginScreen";
import CustomDrawer from "./src/components/CustomDrawer";
import TabNavigator from "./src/TabNavigator";
import Loading from "./src/Loading";
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('ProductList')}
//       />
//     </View>
//   );
// }

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

// const HomeStack = createNativeStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreenn} />
//       <HomeStack.Screen name="ProductList" component={ProductList} />
//       <HomeStack.Screen name="ProductDetail" component={ProductDetail} />
//       <HomeStack.Screen name="Cart" component={Cart} />
//     </HomeStack.Navigator>
//   );
// }

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// const TabNavigator = () => {
//   return(
//     <Tab.Navigator 
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;

//         if (route.name === 'Home') {
//           iconName = focused
//             ? 'home'
//             : 'home';
//         } else if (route.name === 'Profile') {
//           iconName = focused ? 'user' : 'user';
//         }
//         else if (route.name === 'Orders') {
//           iconName = focused ? 'list' : 'list';
//         }

//         // You can return any component that you like here!
//         return <Icon name={iconName} size={size} color={color} /> ;
//       },
//       tabBarActiveTintColor: 'tomato',
//       tabBarInactiveTintColor: 'gray',
//       headerShown: false 
//     })}
//     //  screenOptions={{ headerShown: false }}
//      > 
//     <Tab.Screen name="Home" component={HomeStackScreen} />
//     <Tab.Screen name="Profile" component={SettingsStackScreen} />
//     <Tab.Screen name="Orders" component={SettingsStackScreen} />
//   </Tab.Navigator>
//   )
// }
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={props => <CustomDrawer {...props}  />} >
      <Drawer.Screen name="HomeDrawer" component={TabNavigator} />
      <Drawer.Screen name="ContactDrawer" component={SettingsStackScreen} />
      {/* <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="LoginScreen" component={LoginScreen} /> */}
    </Drawer.Navigator>
  );
}
const App = (props) => {


  useEffect(() => {
     SplashScreen.hide();
  props.checkUserLoginOrNot();
 },[]);
  if(props.auth.isSignedIn === null) { 
    return (
    <Loading/>
   
        );
 }else{ 
  if(props.auth.isSignedIn === true) {
        return (
          <NavigationContainer>
          <DrawerNavigator  />
          </NavigationContainer>
        );
   }
  else { 
      return (
            <NavigationContainer>
                <SettingsStack.Navigator screenOptions={{
                headerShown: false
              }}>
                 <SettingsStack.Screen name="LoginScreen" component={LoginScreen} />
                <SettingsStack.Screen name="Register"  component={Register} />
               
              </SettingsStack.Navigator>
              </NavigationContainer>
              );
    }
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
 return {auth : state.auth};
}
export default connect(mapStateToProps,{checkUserLoginOrNot})(App);
