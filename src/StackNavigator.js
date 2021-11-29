import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreenn from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import ProductList from "./ProductList";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreenn} />
      <Stack.Screen name="About" component={ProductList} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };
