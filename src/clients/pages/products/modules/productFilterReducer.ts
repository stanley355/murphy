export const productFilterReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_OG_LIST':
      state.ogList = [...action.payload.list];
      state.filteredList = [...action.payload.list]
      return {
        ...state
      };
    case 'SET_QUERY_LIST':
      const queryList = [...state.ogList].filter(item => item.category === action.payload.category);
      state.filteredList = [...queryList];
      return {
        ...state
      };
    case 'SET_FILTERED_LIST':
      let newFilteredList = [...state.ogList];
      const filterValues = action.payload.filterValues;

      if (filterValues.web_host_id) {
        newFilteredList = [...newFilteredList].filter(item => item.hosts_id === Number(filterValues.web_host_id));
      }

      if (filterValues.category) {
        newFilteredList = [...newFilteredList].filter(item => item.category === filterValues.category);
      }

      if (filterValues.free_tier) {
        newFilteredList = [...newFilteredList].filter(item => item.free_tier === filterValues.free_tier);
      }

      if (filterValues.free_trial) {
        newFilteredList = [...newFilteredList].filter(item => item.free_trial === filterValues.free_trial);
      }

      if (filterValues.max_price) {
        newFilteredList = [...newFilteredList].filter(item => item.base_price <= Number(filterValues.max_price));
      }

      state.filteredList = [...newFilteredList];

      return {
        ...state
      };
    default:
      return state;
  }
};
