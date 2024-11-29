import { createSlice } from "@reduxjs/toolkit";

const animalSlice = createSlice({
    name: 'animal',
    initialState: [],
    reducers: {
        addAnimal(state,action){
            state.animals.append(action.payload)
        },
        removeAnimal(state,action){
            const animalName = action.payload.name
            state.animals.filter((animal) => animal.name != animalName)
        },
        setAnimals(state,action){
            state.animal = action.payload
        }
    }
})

export const {addAnimal, removeAnimal} = animalSlice.actions;
export default animalSlice.reducer;