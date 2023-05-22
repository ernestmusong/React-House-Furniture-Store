import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
