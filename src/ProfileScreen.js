import * as React from 'react';
import { Button, Text, View,StyleSheet } from 'react-native';
function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  export default ProfileScreen;