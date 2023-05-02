import { Provider } from 'react-redux';
import PasswordManager from './components/password-manager/PasswordManager';
import { store } from './state/store';

function App() {
  return (
    <Provider store={store}>
      <PasswordManager />
    </Provider>
  );
}

export default App;
