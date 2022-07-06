import { createSlice } from '@reduxjs/toolkit';

const productFilterSlice = createSlice({
  name: 'product_filter',
  initialState: {
    ogList: [] as any[],
    filteredList: [] as any[],
  },
  reducers: {
    setInitialProducts: (state, action) => {
      state.ogList = [...action.payload];
      state.filteredList = [...action.payload];
      return state;
    },

    filterByQuery: (state, action) => {
      state.filteredList = state.ogList.filter((item) => item.category === action.payload.category);
      return state;
    },
  },
});

export default productFilterSlice;
