import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreenn from "./src/HomeScreen";
import ProductList from "./src/ProductList";
import ProductDetail from "./src/ProductDetail";

import Register from "./src/Register";
import LoginScreen from "./src/LoginScreen";

import Cart from "./src/Cart";
import TabNavigator from "./src/TabNavigator";
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
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeDrawer" component={TabNavigator} />
      <Drawer.Screen name="ContactDrawer" component={SettingsStackScreen} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="LoginScreen" component={LoginScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
     <DrawerNavigator  />
    </NavigationContainer>
  );
}