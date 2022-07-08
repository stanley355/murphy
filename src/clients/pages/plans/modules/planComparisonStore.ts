import { createSlice, configureStore } from '@reduxjs/toolkit';

const planComparisonSlice = createSlice({
  name: 'plan_comparison',
  initialState: [] as any[],
  reducers: {
    addComparison: (state, action) => {
      state.push(action.payload);
    },
    removeComparison: (state, action) => {
      const name = action.payload.name;
      return state.filter(item => item.name !== name);
    },
  },
});

export const { addComparison, removeComparison } = planComparisonSlice.actions;
export const planComparisonStore = configureStore({
  reducer: planComparisonSlice.reducer,
});
