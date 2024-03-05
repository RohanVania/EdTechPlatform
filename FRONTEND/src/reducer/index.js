import { combineReducers } from "@reduxjs/toolkit";
import authreducer from  "../slices/authSlice"
import profileSlice from  "../slices/profileSlice"
import addcoursereducer from "../slices/addcourseSlice";
const rootReducers=combineReducers({
    auth:authreducer,
    profile:profileSlice,
    addcourse:addcoursereducer

})

export default rootReducers;