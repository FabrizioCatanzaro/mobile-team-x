import React from 'react'
import 'react-native-gesture-handler'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import Hotels from '../screens/Hotels'
import Cities from '../screens/Cities'
import Shows from '../screens/Shows'
import { NavigationContainer } from '@react-navigation/native';


const Menu = createDrawerNavigator()

export default function Drawer() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name='Home' component={Home}/>
        <Menu.Screen name='Cities' component={Cities}/>
        <Menu.Screen name='Shows' component={Shows}/>
        <Menu.Screen name='Hotels' component={Hotels}/>
      </Menu.Navigator>
    </NavigationContainer>
  )
}