import { createSlice } from "@reduxjs/toolkit";

const initialNotification:string='';
const NotificationReducer=createSlice({
    name:'notify',
    initialState:initialNotification,
    reducers:{
        noProduct:(state)=>'noProduct',
        addNotify:(state)=>'add',
        deleteNotify:(state)=>'delete',
        updateNotify:(state)=>'update',
        noNotify:(state)=>'no',
    }
}
)
export const {noProduct,addNotify,deleteNotify,updateNotify,noNotify}=NotificationReducer.actions;
export default NotificationReducer.reducer;