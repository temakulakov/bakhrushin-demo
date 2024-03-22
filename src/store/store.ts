import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import rootReducer, { RootState } from './slices'; // Подставьте ваш корневой редюсер сюда

const store = configureStore({
    reducer: rootReducer,
    // Подставьте любые необходимые middleware сюда
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(/* Ваши middleware */),
    devTools: process.env.NODE_ENV !== 'production', // Включить devTools только в режиме разработки
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
