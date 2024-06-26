import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteProductInCart:any=createAsyncThunk(
    "carts/deleteProduct",
    async(id)=>{
       await axios.delete(`http://localhost:3000/carts/${id}`);
       return id;
    }
)