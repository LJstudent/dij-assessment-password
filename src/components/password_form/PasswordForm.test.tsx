import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../state/store';
import PasswordForm from './PasswordForm';

describe('PasswordForm', () => {
  it('should render the form', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PasswordForm />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Password form')).toBeInTheDocument();
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Select')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Password manager' })).toBeInTheDocument();
  });

  it('should show error messages when submitting with empty fields', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PasswordForm />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(await screen.findByText('Title is required')).toBeInTheDocument();
    expect(await screen.findByText('Password is required')).toBeInTheDocument();
    expect(await screen.findByText('Select an option')).toBeInTheDocument();
  });
});
