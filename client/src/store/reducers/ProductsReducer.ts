import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interfaces";
import { getProducts } from "../../services/getProducts";
import { setProducts } from "../../services/setProducts";

const initialProducts:Product[]=[];
const ProductsReducer=createSlice({
    name:'products',
    initialState:initialProducts,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(getProducts.fulfilled,(state,action)=>{         
            return action.payload;        
        })
        .addCase(setProducts.fulfilled,(state,action)=>{
            return state.map(btn=>btn.id===action.payload.id?action.payload:btn);
        })
    },
}
)
export default ProductsReducer.reducer;