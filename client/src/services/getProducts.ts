import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts:any=createAsyncThunk(
    "products/getAllProduct",
    async()=>{
        const response=await axios.get("http://localhost:3000/products");
        return response.data;
    }
)