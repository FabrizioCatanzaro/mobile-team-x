import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Cities from './src/screens/Cities';

export default function App() {
  return (
    <Provider store={store}>
      <ScrollView style={styles.container}>
        <Cities />
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
