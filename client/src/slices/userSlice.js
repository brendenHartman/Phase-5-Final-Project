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
            state.cash = state.cash - action.payload
            return state
        },
        setUserAch(state,action){
            state.achievements = action.payload
            return state
        }
    }
})

export const { setUser, userCashAdd, userCashSubtract, setUserAch } = userSlice.actions;
export default userSlice.reducer;