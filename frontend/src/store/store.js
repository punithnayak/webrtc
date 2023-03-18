import { configureStore } from '@reduxjs/toolkit';
import reducer from './action';

export const store = configureStore({
  reducer: reducer
});
