import { createSlice } from "@reduxjs/toolkit";

const enclosuresSlice = createSlice({
    name: 'enclosures',
    initialState: [],
    reducers: {
        setEnclosures(state,action){
            return action.payload
        }
    }
})

export const { setEnclosures } = enclosuresSlice.actions;
export default enclosuresSlice.reducer;