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

    filterByFilterBox: (state, action) => {
      let newProductList = [...state.ogList];
      const filterValues = action.payload;

      if (filterValues.web_host_id) {
        const filteredList = newProductList.filter(
          (product: any) => product.hosts_id === Number(filterValues.web_host_id)
        );

        newProductList = filteredList;
      }

      if (filterValues.category) {
        const filteredList = newProductList.filter(
          (product: any) => product.category === filterValues.category
        );
        newProductList = filteredList;
      }

      if (filterValues.free_tier) {
        const filteredList = newProductList.filter(
          (product: any) => product.free_tier === filterValues.free_tier
        );
        newProductList = filteredList;
      }

      if (filterValues.free_trial) {
        const filteredList = newProductList.filter(
          (product: any) => product.free_trial === filterValues.free_trial
        );
        newProductList = filteredList;
      }

      if (filterValues.max_price) {
        const filteredList = newProductList.filter(
          (product: any) => product.base_price <= filterValues.max_price
        );
        newProductList = filteredList;
      }

      state.filteredList = newProductList;
      return state;
    },
  },
});

export default productFilterSlice;
