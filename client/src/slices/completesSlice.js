import { createSlice } from "@reduxjs/toolkit";

const completesSlice = createSlice({
    name: 'completes',
    initialState: [],
    reducers: {
        setCompletes(state,action){
            return action.payload
        }
    }
})

export const { setCompletes } = completesSlice.actions;
export default completesSlice.reducer; 