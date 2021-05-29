import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocationScreen'

import MeteorScreen from './screens/MeteorScreen';
import UpdateScreen from './screens/UpdateScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initaialRouteName="HomeScreen" screenOptions={{
  headerShown:false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="IssLocationScreen" component={IssLocationScreen} />
        <Stack.Screen name="MeteorScreen" component={MeteorScreen} />
        <Stack.Screen name="Updates" component={UpdateScreen} />
 </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


