import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// we are getting this as we are using redux and using nameConvention slice


export const store=configureStore({
    reducer:todoReducer
})