import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "./styles.css";
import Home from './Components/Home';
import Camera from './Components/Camera';
import Result from './Components/Result';
import Profile from './Components/Profile';
import Intro from './Components/Intro';
import { StatusBar } from 'expo-status-bar';
import { Text, View,Pressable,TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();
export default function App() {
  // console.log("Hello");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Intro' component={Intro}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Camera' component={Camera}/>
        <Stack.Screen name='Result' component={Result}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
