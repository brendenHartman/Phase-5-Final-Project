import { createSlice } from "@reduxjs/toolkit";

const enclosuresSlice = createSlice({
    name: 'enclosures',
    initialState: [],
    reducers: {
        setEnclosures(state,action){
            return action.payload
        },
        buyEnclosure(state, action){
            const type = action.payload
            return state.map(enclosure => {
                if (enclosure.type === type) {
                    return { ...enclosure, purchased: true };
                }
                return enclosure;
            });
        },
        increaseAnimal(state,action){
            const id = action.payload;
            return state.map(enclosure => {
                if (enclosure.id === id) {
                    return { ...enclosure, num_animals: enclosure.num_animals + 1};
                }
                return enclosure;
            });
        }
    }
})

export const { setEnclosures, buyEnclosure, increaseAnimal } = enclosuresSlice.actions;
export default enclosuresSlice.reducer;