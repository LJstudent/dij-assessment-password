import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PasswordForm from './components/password_form/PasswordForm';
import { store } from './state/store';
import PasswordManager from './components/password_manager/PasswordManager';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PasswordForm />} />
          <Route path="password-manager" element={<PasswordManager />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
