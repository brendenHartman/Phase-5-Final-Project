import { createSlice } from "@reduxjs/toolkit";

const completesSlice = createSlice({
    name: 'completes',
    initialState: [],
    reducers: {
        setCompletes(state,action){
            return action.payload
        },
        claimCom(state,action){
            for(let com in state){
                if(com.achievement_id === action.payload){
                    com.claimed = true
                }
            }
            return state
        }
    }
})

export const { setCompletes, claimCom } = completesSlice.actions;
export default completesSlice.reducer; 