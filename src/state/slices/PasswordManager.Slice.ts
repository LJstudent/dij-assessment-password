import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPasswordForm } from '../../model/interfaces/IPasswordForm';

interface PasswordManagerState extends Array<IPasswordForm> {};

const initialState: PasswordManagerState = [];

export const passwordManagerSlice = createSlice({
    name: 'passwordManager',
    initialState,
    reducers: {
        addPasswordToManager: (state, action: PayloadAction<IPasswordForm>) => {
            state.push(action.payload)
        },
    },
});

export const { addPasswordToManager } = passwordManagerSlice.actions;

export default passwordManagerSlice.reducer;