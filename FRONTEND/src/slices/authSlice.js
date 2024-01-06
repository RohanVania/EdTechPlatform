import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    token:null
}

const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    }
)


export default authSlice.reducer;
