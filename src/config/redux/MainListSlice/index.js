import { createSlice } from "@reduxjs/toolkit";

const CollectAllist = createSlice({
  name: "Mainlist",
  initialState: [],
  reducers: {
    collectList(state, action) {
      return [...state, action.payload];
    },
    collectItem(state, action) {
      return action.payload ;
    },
  },
});

export const { collectList, collectItem } = CollectAllist.actions;
export default CollectAllist.reducer;
