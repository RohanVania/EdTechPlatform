import { createSlice } from "@reduxjs/toolkit";


const initiState={
    changeProfileFlag:false,
    userData: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,    
    // userData:  null,    
}   

const profileSlice=createSlice({
    name:'profile',
    initialState:initiState,
    reducers:{
        setUser:(state,action)=>{
            state.userData=action.payload;
        },
        updateUser:(state,action)=>{
            state.userData = action.payload;
        },
        setChangeProfileFlag:(state,action)=>{
            state.changeProfileFlag=action.payload
        }

    }

})

export default profileSlice.reducer;
export const {setUser,updateUser,setChangeProfileFlag}=profileSlice.actions;
