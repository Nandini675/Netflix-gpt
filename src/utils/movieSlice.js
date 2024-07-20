import { createSlice } from "@reduxjs/toolkit";

 
 
 const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        trailervdeo: null ,
        popularmovies:null,
        topratedmovies:null,
        upcomingmovies:null
    },
    reducers:{
        addnowplayingmovies:(state, action) =>{
state.nowplayingmovies=action.payload;

        },
        addpopularmovies:(state, action) =>{
state.popularmovies=action.payload;

        },
        addtopratedmovies:(state, action) =>{
state.topratedmovies=action.payload;

        },
        addupcomingmovies:(state, action) =>{
state.upcomingmovies=action.payload;

        },
        addTrailervdeo : (state,action) => {
        state.trailervdeo = action.payload;
        }
    }
 });
 export const {addnowplayingmovies,addTrailervdeo,addpopularmovies, addtopratedmovies, addupcomingmovies}= movieSlice.actions;
 export  default movieSlice.reducer;