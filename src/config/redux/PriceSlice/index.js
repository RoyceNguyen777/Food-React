import { createSlice } from "@reduxjs/toolkit";

const CollectPrice = createSlice({
  name: "money",
  initialState: "",
  reducers: {
    collectMoney(state, action) {
      return action.payload;
    },
  },
});

export const { collectMoney } = CollectPrice.actions;
export default CollectPrice.reducer;
