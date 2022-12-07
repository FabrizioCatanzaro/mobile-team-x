import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cities from '../screens/Cities';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({ focused, color, size}) => {
                        let iconName = ''
                        switch ( route.name ) {
                            case 'Cities':
                                iconName = focused ? 'home-city' : 'home-city-outline'
                                break;
                            case 'Hotels':
                                iconName = focused ? 'bed' : 'bed-outline'
                                break;
                        }
                        return <Icon name = { iconName } size= {size} color = {color} />
                    }
                })}
            >
                <Tab.Screen name="Cities" component={Cities} />
                <Tab.Screen name="Hotels" component={Cities} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}