import { configureStore ,combineReducers } from "@reduxjs/toolkit";

import { Userreducer } from "../Reducers/Userslice";

const rooterducer=combineReducers({userRed:Userreducer})

 export const Store=configureStore({
    reducer:rooterducer,
   


});

