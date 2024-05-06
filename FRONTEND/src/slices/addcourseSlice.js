import { createSlice } from "@reduxjs/toolkit";

const initialState={
    step:1,
    savedcourse:null,
    course:null,
    editCourse:false,
    formSubmit:false
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
        },
        setFormSubmit:(state,action)=>{
            state.formSubmit=action.payload
        },
        setEditCourse:(state,action)=>{
            state.editCourse=action.payload;
        },
        setCourse:(state,action)=>{
            state.course=action.payload;
        }

    }
})

export const {setStep,setAddLecture,setFormSubmit,setEditCourse,setCourse}=addcourseSlice.actions
export default addcourseSlice.reducer