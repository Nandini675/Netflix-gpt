import { configureStore } from "@reduxjs/toolkit";
import   userReducer  from "./Userslice";
import  moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from"./configSlice";
const Appstore= configureStore(
{
    reducer:{
        user: userReducer,
        movies: moviesReducer,
         gpt:  gptReducer,
         config:configReducer,
    }
}

)
export default Appstore;
