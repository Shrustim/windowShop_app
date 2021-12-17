import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Spinner = (prop) => {
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(Animated.timing(spinValue, {
      toValue: 1, duration: 1000, easing: Easing.linear, useNativeDriver: true
    })).start()
  }, [])
  const rotateAnimation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })
  return (
    <View>
      <Animated.View style={{ transform: [{ rotate: rotateAnimation }] }}>
        <Icon name="spinner" size={20} color={prop.color}></Icon>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  spinnerIcon: {
    fontSize: 20,
  }
})
export default Spinner;