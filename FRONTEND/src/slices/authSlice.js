import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState={
    loading:false,
    token:localStorage.getItem('token')?json.parse(localStorage.getItem("token")):null,
    registerData:null
}

const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
        setRegisterData:(state,action)=>{
            state.registerData=action.payload;
        },

        setToken:(state,action)=>{
            state.token=action.payload;
        }

    }

    }
)

export default authSlice.reducer;

export const {setLoading,setToken,setRegisterData}=authSlice.actions;