import { createSlice } from "@reduxjs/toolkit";

const cashSlice = createSlice({
    name: 'cash',
    initialState: 1000,
    reducers: {
        addBy(state,action){
            return state += action.payload
        },
        subtractBy(state,action){
            return state -= action.payload
        }
    }
})

export const { addBy, subtractBy } = cashSlice.actions
export default cashSlice.reducer;