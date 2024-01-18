import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    token:null,
}

const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        setLoading:(state,action)=>{
            state.loading=action.payload;
        }, 

        setToken:(state,action)=>{
            state.token=action.payload;
        }

    }

    }
)

export default authSlice.reducer;

export const {setLoading,setToken}=authSlice.actions;