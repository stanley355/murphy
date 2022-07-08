import { configureStore } from '@reduxjs/toolkit';
import productFilterSlice from './productFilterSlice';

const productFilterStore = configureStore({
  reducer: productFilterSlice.reducer,
});

export default productFilterStore;
