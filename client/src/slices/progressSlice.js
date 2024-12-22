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
            if(state[action.payload] === false){
                state.completed += 1
                state[action.payload] = true
            }
            return state
        }
    }
})

export const { setProgress, completeAch } = progressSlice.actions
export default progressSlice.reducer