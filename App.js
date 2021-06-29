import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Outfits from './Outfits';


const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
    return (
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Outfits" component={Outfits}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
