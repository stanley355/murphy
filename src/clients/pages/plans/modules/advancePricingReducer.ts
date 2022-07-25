export const advancePricingReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      state.totalPrice = action.payload.totalPrice;
      return {
        ...state,
      };
    case 'INCR_COUNT':
      state[action.payload.item] += 1;
      state.totalPrice *= state[action.payload.item];
      return {
        ...state,
      };
    case 'DECR_COUNT':
      if (state[action.payload.item] === 1) {
        alert('Minimum number is 1');
      } else {
        state[action.payload.item] -= 1;
        state.totalPrice *= state[action.payload.item];
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
