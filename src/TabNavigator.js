import React, { useEffect, useRef } from 'react'
import { Button, Text, View,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenn from "./HomeScreen";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Colors from './constants/Colors';
import Register from "./Register";
import LoginScreen from "./LoginScreen";
import Header from "./components/Header";

import Cart from "./Cart";
// import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

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

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('ProductList')}
      />
    </View>
  );
}

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

const HomeStack = createNativeStackNavigator();

function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreenn} 
        options={{
          header: () => (
            <Header main={true} navigation={navigation} />
              ),
        }}
      />
      <HomeStack.Screen name="ProductList" component={ProductList}
       options={{
        header: () => (
          <Header main={false} navigation={navigation} />
            ),
      }} />
      <HomeStack.Screen name="ProductDetail" component={ProductDetail}
       options={{
        header: () => (
          <Header main={false} navigation={navigation} />
            ),
      }} />
      <HomeStack.Screen name="Cart" component={Cart}
       options={{
        header: () => (
          <Header main={false} navigation={navigation} />
            ),
      }} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen({navigation}) {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen}
         options={{
          header: () => (
            <Header main={false} navigation={navigation} />
              ),
        }} />
      <SettingsStack.Screen name="Details" component={DetailsScreen}
         options={{
          header: () => (
            <Header main={false} navigation={navigation} />
              ),
        }} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
  const { item, onPress, accessibilityState,lablee } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
          <Icon  name={item} color={focused ? Colors.white : Colors.primary} style={focused ?{fontSize:15}: {fontSize:23}} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}>
          {lablee}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}
const BottomTabNavigator = () => {
 
    return(
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarStyle:{
          height:60,
          position:'absolute',
          bottom:8,
          right:16,
          left:16,
          borderRadius:16,
          marginTop:0
        },
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;
  
        //   if (route.name === 'Home') {
        //     iconName = focused
        //       ? 'home'
        //       : 'home';
        //   } else if (route.name === 'Profile') {
        //     iconName = focused ? 'user' : 'user';
        //   }
        //   else if (route.name === 'Orders') {
        //     iconName = focused ? 'list' : 'list';
        //   }
  
        //   // You can return any component that you like here!
        //   return <Icon name={iconName} size={size} color={color} /> ;
        // },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false 
      })}
      //  screenOptions={{ headerShown: false }}
       > 
      <Tab.Screen name="Home" component={HomeStackScreen}
       options={{
        tabBarShowLabel: false,
        // tabBarIcon: ({color,focused,size}) =>( <Icon name={"home"} size={size} color={color} />),
        tabBarButton: (props) => <TabButton {...props} item={"home"} lablee="Home" />
      }}
       />
      <Tab.Screen name="Profile" component={SettingsStackScreen}
       options={{
        tabBarShowLabel: false,
        // tabBarIcon: ({color,focused,size}) => (<Icon name={"user"} size={size} color={color} />),
        tabBarButton: (props) => <TabButton {...props} item={"user"} lablee="Profile" />
      }} />
      <Tab.Screen name="Orders" component={SettingsStackScreen}
       options={{
        tabBarShowLabel: false,
        // tabBarIcon: ({color,focused,size}) =>( <Icon name={"list"} size={size} color={color} />),
        tabBarButton: (props) => <TabButton {...props} item={"list"} lablee="Orders" />
      }} />
    </Tab.Navigator>
    )
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.primary,
  }
})

export default BottomTabNavigator;