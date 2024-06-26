import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../interfaces";
import { getCarts } from "../../services/getAllCart";
import { addNewProductToCart } from "../../services/addNewProductToCart";
import { addProductAvailableInCart } from "../../services/addProductAvailableInCart";
import { deleteProductInCart } from "../../services/deleteProductInCart";
import { updateProductInCart } from "../../services/updateProductInCart";

const initialCart:Cart[]=[];
const CartReducer=createSlice({
    name:'carts',
    initialState:initialCart,
    reducers:{
        changeQuantity:(state,action:PayloadAction<{id:number,quantityChange:number}>)=>{
            return state.map(btn=>btn.id===action.payload.id?{...btn,quantity:action.payload.quantityChange}:btn);
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getCarts.fulfilled,(state,action)=>{
            return action.payload;
        })
        .addCase(addNewProductToCart.fulfilled,(state,action)=>{
             state.push(action.payload);
        })
        .addCase(addProductAvailableInCart.fulfilled,(state,action)=>{
            return state.map(btn=>btn.id===action.payload.id?action.payload:btn);          
        })
        .addCase(deleteProductInCart.fulfilled,(state,action)=>{
            return state.filter(btn=>btn.id!==action.payload);
        })
        .addCase(updateProductInCart.fulfilled,(state,action)=>{
            return state.map(btn=>btn.id===action.payload.id?action.payload:btn);
        })
    },
})
export const {changeQuantity}=CartReducer.actions;
export default CartReducer.reducer;