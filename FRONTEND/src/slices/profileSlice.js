import { createSlice } from "@reduxjs/toolkit";


const initiState={
    loading:false,
    userData: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,    
    // userData:  null,    

}   

const profileSlice=createSlice({
    name:'profile',
    initialState:initiState,
    reducers:{
        setUser:(state,action)=>{
            state.userData=action.payload;
        }

    }

})

export default profileSlice.reducer;
export const {setUser}=profileSlice.actions;
