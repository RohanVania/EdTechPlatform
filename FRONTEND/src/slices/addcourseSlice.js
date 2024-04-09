import { createSlice } from "@reduxjs/toolkit";

const initialState={
    step:2,
    savedcourse:null,
    course:null,
    editCourse:false,
    loading:false
}

const addcourseSlice=createSlice({
    name:'addcourse',
    initialState:initialState,
    reducers:{
        setStep:(state,action)=>{
            state.step=action.payload
        }
    }
})

export const {setStep}=addcourseSlice.actions
export default addcourseSlice.reducer