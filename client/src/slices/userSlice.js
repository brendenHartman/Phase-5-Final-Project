import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser(state,action){
            return action.payload
        },
        userCashAdd(state,action){
            state.cash += action.payload
            return state
        },
        userCashSubtract(state,action){
            state.cash -= action.payload
            return state
        }
    }
})

export const { setUser, userCashAdd, userCashSubtract } = userSlice.actions;
export default userSlice.reducer;