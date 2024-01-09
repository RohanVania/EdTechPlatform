import {configureStore} from  "@reduxjs/toolkit"
import rootReducers from "./reducer"


const store=configureStore({
    reducer:rootReducers
})

//* In our case we have multiple states, so we have multiple reducer that why we combine all reducers and pass it as a single object to the store

//* Redux toolkit by default has a combine reducer, I am just using the function for understanding.


export {store}

/**
 *  STEPS IN REDUX TOOLKIT
 * 
 *  1. Configure store and inside configure store, right which reducers you have. 
 *       ( Reducer is a function that takes in the current state of an application and an action as arguments, 
 *         and returns a new state based on the action.)
 *  
 * 2. Pass the store to the provider or wrap the App with store using Provider
 *  
 * 3. Create a slice using the createSlice method 
 *    ( Slice is a function that accepts object that consists of name,initial state, reducer object)
 *    It is a collection of redux reducer logic and action for a single feature in your app ( Single kind of data)
 *    typically defined in a single file.
 * 
 *  4. Inside the Create Slice Reducer we write all the actions and export it one by one 
 * 
 */