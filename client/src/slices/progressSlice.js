import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
    name: 'progress',
    initialState: {
        completed: 0,
        cc: false,
        ch: false,
        cs: false,
        wttf: false,
        ss: false,
        wnms: false,
        fe: false,
        zoo: false,
    },
    reducers: {
        completeAch(state,action){
            if(state[action.payload] === false){
                state[action.payload] = true
                state.completed += 1
            }
            return state
        }
    }
})

export const { completeAch } = progressSlice.actions;
export default progressSlice.reducer;