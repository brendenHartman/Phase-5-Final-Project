import {configureStore} from '@reduxjs/toolkit';
import cashReducer from './slices/cashSlice';
import userReducer from './slices/userSlice';
import enclosuresReducer from './slices/enclosuresSlice'

const store = configureStore({
    reducer: {
        cash: cashReducer,
        user: userReducer,
        enclosures: enclosuresReducer,
    }

})

export default store