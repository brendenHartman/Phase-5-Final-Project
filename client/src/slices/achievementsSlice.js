import { createSlice } from "@reduxjs/toolkit";

const achievementsSlice = createSlice({
    name: 'achievements',
    initialState: [],
    reducers: {
        setAchievements(state,action){
            return action.payload
        }
    }
})

export const { setAchievements } = achievementsSlice.actions
export default achievementsSlice.reducer