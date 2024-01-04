import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    token:null
}

const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        setToken(state,action){
            console.log(action)
            state.token=action.payload;
        }
    }
})


export const { setToken }=authSlice.actions;
export default authSlice.reducer;
