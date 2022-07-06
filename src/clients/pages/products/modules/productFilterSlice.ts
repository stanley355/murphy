import { createSlice } from '@reduxjs/toolkit';

const productFilterSlice = createSlice({
  name: 'product_filter',
  initialState: [] as any[],
  reducers: {
    attachAllItems: (state, action) => {
      return state = [...action.payload];
    },
  },
});

export default productFilterSlice;
