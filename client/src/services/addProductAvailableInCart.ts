import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProductAvailableInCart:any=createAsyncThunk(
    "carts/addProductAvailable",
    async({id,quantityInCart}:{id:number,quantityInCart:number})=>{
        const response=await axios.patch(`http://localhost:3000/carts/${id}`,{quantity:quantityInCart});
        return response.data;
    }
)