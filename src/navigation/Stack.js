import { createStackNavigator } from '@react-navigation/stack';
import CityDetails from '../screens/CityDetails'
import CityCard from '../components/CityCard';
import { NavigationContainer } from '@react-navigation/native';
import Cities from '../screens/Cities'

const Stack = createStackNavigator();

export default function MyStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Cities" component={Cities} />
                <Stack.Screen name="CityDetails" title={'Details'} component={CityDetails} />
            </Stack.Navigator>
    );
}