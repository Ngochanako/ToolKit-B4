import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarts:any=createAsyncThunk(
    "carts/getAllCart",
    async()=>{
        const response=await axios.get("http://localhost:3000/carts");
        return response.data;
    }
)