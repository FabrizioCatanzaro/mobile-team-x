import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Stack';
import SignUp from '../screens/SignUp';

const Menu = createDrawerNavigator()

export default function Drawer() {
    return (
        <NavigationContainer>
            <Menu.Navigator>
                <Menu.Screen name='Cities' component={Stack}/>
                <Menu.Screen name='SignUp' component={SignUp}/>
            </Menu.Navigator>
        </NavigationContainer>
    )
}