import React from 'react'
import 'react-native-gesture-handler'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import Hotels from '../screens/Hotels'
import { NavigationContainer } from '@react-navigation/native';


const Menu = createDrawerNavigator()

export default function Drawer() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name='Home' component={Home}/>
        <Menu.Screen name='Hotels' component={Hotels}/>
      </Menu.Navigator>
    </NavigationContainer>
  )
}