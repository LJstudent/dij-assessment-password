import { configureStore } from '@reduxjs/toolkit';
import passwordManagerReducer from './slices/PasswordManager.Slice';
import { clientApi } from '../services/Client.Service';

export const store = configureStore({
    reducer: {
        passwordManager: passwordManagerReducer,
        [clientApi.reducerPath]: clientApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(clientApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;