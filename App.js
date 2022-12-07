import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TabNav from './src/navigation/TabNav';
import Cities from './src/screens/Cities';


export default function App() {
  return (
    <Provider store={store}>
      <TabNav />
    </Provider>
  );
}