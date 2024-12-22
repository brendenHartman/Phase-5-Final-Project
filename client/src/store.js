import {configureStore} from '@reduxjs/toolkit';
import cashReducer from './slices/cashSlice';
import userReducer from './slices/userSlice';
import enclosuresReducer from './slices/enclosuresSlice'
import animalsReducer from './slices/animalSlice'
import achievementsReducer from './slices/achievementsSlice'
import progressReducer from './slices/progressSlice'
import completesReducer from './slices/completesSlice'

const store = configureStore({
    reducer: {
        cash: cashReducer,
        user: userReducer,
        enclosures: enclosuresReducer,
        animals: animalsReducer,
        achievements: achievementsReducer,
        progress: progressReducer,
        completes: completesReducer,
    }

})

export default store