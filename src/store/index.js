import { configureStore } from '@reduxjs/toolkit';
import reducer from '../slice/formSlice';
const store = configureStore({
    reducer: {reducer},
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;