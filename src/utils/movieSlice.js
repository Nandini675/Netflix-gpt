import { createSlice } from "@reduxjs/toolkit";

 
 
 const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        trailervdeo: null 
    },
    reducers:{
        addnowplayingmovies:(state, action) =>{
state.nowplayingmovies=action.payload;

        },
        addTrailervdeo : (state,action) => {
        state.trailervdeo = action.payload;
        }
    }
 });
 export const {addnowplayingmovies,addTrailervdeo}= movieSlice.actions;
 export  default movieSlice.reducer;