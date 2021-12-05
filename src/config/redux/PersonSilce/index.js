import { createSlice } from "@reduxjs/toolkit";

const CollectPer = createSlice({
    name: 'person',
    initialState: [],
    reducers: {
        collect(state, action) {
            return  action.payload
        }
    }
})

export const { collect } = CollectPer.actions
export default CollectPer.reducer