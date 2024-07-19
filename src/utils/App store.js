import { configureStore } from "@reduxjs/toolkit";
import   userReducer  from "./Userslice";
import  moviesReducer from "./movieSlice";

const Appstore= configureStore(
{
    reducer:{
        user: userReducer,
        movies: moviesReducer,
    }
}

)
export default Appstore;
