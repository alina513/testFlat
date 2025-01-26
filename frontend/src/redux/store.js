import { configureStore } from '@reduxjs/toolkit';
import flatsReducer from './flatSlice';

export const store = configureStore({
  reducer: {
    flats: flatsReducer,
  },
});

