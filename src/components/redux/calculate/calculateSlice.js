import {createSlice} from '@reduxjs/toolkit';

export const calculateSlice = createSlice({
  name: 'values',
  initialState: {
    profitItems: [],
    costItems: [],
  },
  reducers: {
    addProfitItems: (state, action) => {
      state.profitItems.push(action.payload);
    },
    addCostItems: (state, action) => {
      state.costItems.push(action.payload);
    },
    clearItems: (state, action) => {
      state.profitItems.splice('');
      state.costItems.splice('');
    },
    removeProfitItem: (state, action) => {
      state.profitItems.splice(action.payload, 1);
    },
    removeCostItem: (state, action) => {
      state.costItems.splice(action.payload, 1);
    },
  },
});

export const {
  addProfitItems,
  addCostItems,
  clearItems,
  removeProfitItem,
  removeCostItem,
} = calculateSlice.actions;
export default calculateSlice.reducer;
