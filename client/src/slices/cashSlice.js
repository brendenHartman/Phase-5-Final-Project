import { createSlice } from "@reduxjs/toolkit";

const cashSlice = createSlice({
    name: 'cash',
    initialState: 1000,
    reducers: {
        addBy(state,action){
            state.cash += action.payload
        },
        subtractBy(state,action){
            state.cash -= action.payload
        }
    }
})

export const { addBy, subtractBy } = cashSlice.actions
export default cashSlice.reducer;