import { StyleSheet,Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/navigation/Drawer';



export default function App() {
  return (
    <NavigationContainer>
      <Drawer/>
   </NavigationContainer>
  );
}

