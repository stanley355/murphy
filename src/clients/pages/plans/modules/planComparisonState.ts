import { createSlice, configureStore } from '@reduxjs/toolkit';

const planComparisonSlice = createSlice({
  name: 'plan_comparison',
  initialState: [] as any[],
  reducers: {
    addComparison: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addComparison } = planComparisonSlice.actions;
export const planComparisonStore = configureStore({
  reducer: planComparisonSlice.reducer,
});
