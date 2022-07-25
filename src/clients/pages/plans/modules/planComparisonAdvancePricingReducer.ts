export const planComparisonAdvancePricingReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      state.totalPrice = action.payload.totalPrice;
      return {
        ...state
      };
    default:
      return state;
  }
};
