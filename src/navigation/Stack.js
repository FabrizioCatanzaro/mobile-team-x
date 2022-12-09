import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Hotels from '../screens/Hotels'
import { NavigationContainer } from '@react-navigation/native';

const StackNav = createNativeStackNavigator()

export default function Stack() {
  return (
    <NavigationContainer>
       <StackNav.Navigator>
          <StackNav.Screen name='Home' component={Home}/>
          <StackNav.Screen name='Hotels' component={Hotels}/>
        </StackNav.Navigator>
    </NavigationContainer>
  )
}