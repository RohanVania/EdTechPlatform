import { createSlice } from "@reduxjs/toolkit";

const initialState={
    step:1,
    savedcourse:null,
    course:null,
    editCourse:false,
    loading:false,
    addLecture:false
}

const addcourseSlice=createSlice({
    name:'addcourse',
    initialState:initialState,
    reducers:{
        setStep:(state,action)=>{
            state.step=action.payload
        },
        setAddLecture:(state,action)=>{
            state.addLecture=!state.addLecture;
        }

    }
})

export const {setStep,setAddLecture}=addcourseSlice.actions
export default addcourseSlice.reducer