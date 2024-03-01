import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState={
    logout:false,
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
        },
        setLogout:(state,action)=>{
            state.logout=action.payload
        }

    }

    }
)

export default authSlice.reducer;

export const {setLoading,setToken,setRegisterData,setLogout}=authSlice.actions;