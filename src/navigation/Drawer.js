import React from 'react'
import 'react-native-gesture-handler'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import Hotels from '../screens/Hotels'
import Cities from '../screens/Cities'
import { NavigationContainer } from '@react-navigation/native';


const Menu = createDrawerNavigator()

export default function Drawer() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name='Home' component={Home}/>
        <Menu.Screen name='Hotels' component={Hotels}/>
        <Menu.Screen name='Cities' component={Cities}/>
      </Menu.Navigator>
    </NavigationContainer>
  )
}