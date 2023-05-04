import passwordManagerReducer, { addPasswordToManager } from './PasswordManager.Slice';
import { IPasswordForm } from '../../model/interfaces/IPasswordForm';

describe('passwordManagerSlice', () => {
  it('should add a password to the manager', () => {
    const passwordForm: IPasswordForm = {
      title: 'Facebook',
      password: 'password123',
      select: {
        name: 'Client A',
        color: '#FF0000'
      }
    };
    const initialState: IPasswordForm[] = [];
    const action = addPasswordToManager(passwordForm);
    const state = passwordManagerReducer(initialState, action);
    expect(state.length).toBe(1);
    expect(state[0]).toEqual(passwordForm);
  });
});