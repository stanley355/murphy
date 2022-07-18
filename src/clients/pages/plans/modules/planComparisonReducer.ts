export const planComparisonReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const oldState = [...state.comparisonList];
      state.comparisonList = [...oldState].push(action.payload.item);
      return {
        ...state
      };
    case 'REMOVE_ITEM':
      const reducedList = [...state.comparisonList].push(action.payload.item);
      state.filteredList = reducedList;
      return {
        ...state
      };
    default:
      return state;
  }
};
