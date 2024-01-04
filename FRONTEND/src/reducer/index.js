import { combineReducers } from "@reduxjs/toolkit";
import authreducer from  "../slices/authSlice"

const rootReducers=combineReducers({
    auth:authreducer
})

export default rootReducers;