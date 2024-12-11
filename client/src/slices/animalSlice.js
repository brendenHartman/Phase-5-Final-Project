import { createSlice } from "@reduxjs/toolkit";

const animalSlice = createSlice({
    name: 'animal',
    initialState: [],
    reducers: {
        addAnimal(state,action){
            return state.append(action.payload)
        },
        addAnimals(state,action){
            return state.concat(action.payload)
        },
        removeAnimal(state,action){
            const animalName = action.payload.name
            return state.filter((animal) => animal.name !== animalName)
        },
        setAnimals(state,action){
            return action.payload
        },
        buyAnimal(state, action) {
            const id = action.payload;
            return state.map(animal => {
                if (animal.id === id) {
                    return { ...animal, purchased: true };
                }
                return animal;
            });
        }
    }
})

export const {addAnimal, removeAnimal, addAnimals, setAnimals, buyAnimal} = animalSlice.actions;
export default animalSlice.reducer;