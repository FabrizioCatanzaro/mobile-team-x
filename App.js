import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Drawer from './src/navigation/Drawer';

export default function App() {
  return (
    <Provider store={store}>
      <Drawer/>
    </Provider>
  );
}
