import { combineReducers } from "@reduxjs/toolkit";
import authreducer from  "../slices/authSlice"
import profileSlice from  "../slices/profileSlice"
const rootReducers=combineReducers({
    auth:authreducer,
    profile:profileSlice
})

export default rootReducers;