import { configureStore } from '@reduxjs/toolkit';
import form from '../slice/formSlice';
const store = configureStore({
    reducer: {form},
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;