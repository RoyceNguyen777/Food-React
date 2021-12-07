import { createSlice } from "@reduxjs/toolkit";

const CollectPrice = createSlice({
  name: "name",
  initialState: "",
  reducers: {
    collectMoney(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { collectMoney } = CollectPrice.actions;
export default CollectPrice.reducer;
