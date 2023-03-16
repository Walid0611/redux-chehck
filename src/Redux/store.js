import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './Todo'




export const store = configureStore({
    reducer: {
       todo: todoSlice 
    },
})