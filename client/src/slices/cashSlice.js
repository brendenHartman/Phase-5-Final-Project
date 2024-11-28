import { createSlice } from "@reduxjs/toolkit";

const cashSlice = createSlice({
    name: 'cash',
    initialState: {cash: 1000},
    reducer: {
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