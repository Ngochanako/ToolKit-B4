import { asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setProducts:any=createAsyncThunk(
    "products/setProduct",
    async({quantityProduct,id}:{quantityProduct:number,id:number})=>{
        const response=await axios.patch(`http://localhost:3000/products/${id}`,{quantity:quantityProduct});
        return response.data;
    }
)