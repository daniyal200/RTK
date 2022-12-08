import {configureStore} from "@reduxjs/toolkit"
import auth from "../features/counter/auth.js";



export const store = configureStore({
    reducer :{
        auth:auth,
    }
})