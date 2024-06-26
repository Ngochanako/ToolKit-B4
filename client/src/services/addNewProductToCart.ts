import { createAsyncThunk } from "@reduxjs/toolkit";
import { Cart } from "../interfaces";
import axios from "axios";

export const addNewProductToCart:any=createAsyncThunk(
    "carts/addNewProduct",
    async(product:Cart)=>{
       const response=await axios.post("http://localhost:3000/carts",product);
       return response.data;
    }
)