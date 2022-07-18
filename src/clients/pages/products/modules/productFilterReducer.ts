export const productFilterReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_OG_LIST':
      state.ogList = [...action.payload.list];
      state.filteredList = [...action.payload.list]
      return {
        ...state
      };
    default:
      return state;
  }
};
