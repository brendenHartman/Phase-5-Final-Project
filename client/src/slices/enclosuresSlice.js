import { createSlice } from "@reduxjs/toolkit";

const enclosuresSlice = createSlice({
    name: 'enclosures',
    initialState: [],
    reducers: {
        setEnclosures(state,action){
            return action.payload
        },
        buyEnclosure(state, action) {
            const type = action.payload;
            return state.map(enclosure => {
                if (enclosure.type === type) {
                    return { ...enclosure, purchased: true };
                }
                return enclosure;
            });
        }
    }
})

export const { setEnclosures, buyEnclosure } = enclosuresSlice.actions;
export default enclosuresSlice.reducer;