import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import rootReducer, {RootState} from './reducers/RootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
