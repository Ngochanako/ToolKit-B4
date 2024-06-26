import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Cart } from "../interfaces";

export const updateProductInCart:any=createAsyncThunk(
    "carts/updateProduct",
    async(product:Cart)=>{      
        const response=await axios.patch(`http://localhost:3000/carts/${product.id}`,{quantity:product.quantity});
        return response.data;
    }
)