import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cities from '../screens/Cities'
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Stack';

const Menu = createDrawerNavigator()

export default function Drawer() {
    return (
        <NavigationContainer>
            <Menu.Navigator>
                <Menu.Screen name='Cities' component={Stack}/>
            </Menu.Navigator>
        </NavigationContainer>
    )
}