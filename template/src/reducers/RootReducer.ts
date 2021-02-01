import {combineReducers} from '@reduxjs/toolkit';
import quotesReducer from './quotesSlice';

const rootReducer = combineReducers({
  quotes: quotesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
