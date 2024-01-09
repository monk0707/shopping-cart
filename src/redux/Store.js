import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import CartReducer from "./Slices/CartSlice"


export const store = configureStore({
    reducer:{
        cart: CartReducer,
    }
});
