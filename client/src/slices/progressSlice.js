import { createSlice } from "@reduxjs/toolkit"; 

const progressSlice = createSlice({
    name: 'progress',
    initialState: {
        completed: 0,
        ss: false,
        wttf: false,
        wnms: false,
        cc: false,
        ch: false,
        cs: false,
        fe: false,
        zoo: false
    },
    reducers: {
        setProgress(state,action){
            return action.payload
        },
        completeAch(state,action){
            state[action.payload] = true
            state.completed += 1
            return state
        }
    }
})

export const { setProgress, completeAch } = progressSlice.actions
export default progressSlice.reducer