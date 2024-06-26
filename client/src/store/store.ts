import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./reducers/ProductsReducer";
import CartReducer from "./reducers/CartReducer";
import NotificationReducer from "./reducers/NotificationReducer";

export const store=configureStore({
    reducer:{
        products:ProductsReducer,
        carts:CartReducer,
        notify:NotificationReducer,
    }
})