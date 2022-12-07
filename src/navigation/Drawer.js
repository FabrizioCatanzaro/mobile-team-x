import React from 'react'
import 'react-native-gesture-handler'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'

const Menu = createDrawerNavigator()

export default function Drawer() {
  return (
    <Menu.Navigator>
        <Menu.Screen name='Home' component={Home}/>
    </Menu.Navigator>
  )
}