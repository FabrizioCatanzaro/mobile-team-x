
import Drawer from './src/navigation/Drawer';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Stack } from '@react-native-material/core';


export default function App() {
  return (
    <Provider store={store}>
      <Drawer/>
      <Stack/>
    </Provider>
  );
}

