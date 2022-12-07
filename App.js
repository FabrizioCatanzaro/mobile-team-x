
import Drawer from './src/navigation/Drawer';
import { Provider } from 'react-redux';
import { store } from './redux/store';



export default function App() {
  return (
    <Provider store={store}>
      <Drawer/>
    </Provider>
  );
}

