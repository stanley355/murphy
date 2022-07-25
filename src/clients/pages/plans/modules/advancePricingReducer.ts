interface IAction {
  type: string;
  payload: any;
}

export const advancePricingReducer = (state: any, action: IAction) => {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      state.basePrice = action.payload.basePrice;
      state.totalPrice = action.payload.basePrice;
      return {
        ...state,
      };
    case 'INCR_COUNT':
      const keyMap: any = {};
      const itemName = action.payload.item;
      keyMap[itemName] = state[itemName] + 1;
      const monthlyPrice =
        itemName === 'month' ? keyMap.month * state.member : keyMap.member * state.month;
      keyMap.totalPrice = state.basePrice * monthlyPrice;

      return {
        ...state,
        ...keyMap,
      };
    case 'DECR_COUNT':
      if (state[action.payload.item] === 1) {
        alert('Minimum number is 1');
      } else {
        const keyMap: any = {};
        const itemName = action.payload.item;
        keyMap[itemName] = state[itemName] - 1;
        const monthlyPrice =
          itemName === 'month' ? keyMap.month * state.member : keyMap.member * state.month;
        keyMap.totalPrice = state.basePrice * monthlyPrice;

        return {
          ...state,
          ...keyMap,
        };
      }
    default:
      return state;
  }
};
