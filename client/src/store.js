import {configureStore} from '@reduxjs/toolkit';
import cashReducer from './slices/cashSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        cash: cashReducer,
        user: userReducer,
    }

})

export default store