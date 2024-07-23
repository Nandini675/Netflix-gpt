import { createSlice } from "@reduxjs/toolkit";

  const gptSlice= createSlice({
   
    name:'gpt',
    initialState:{
        showgptsearch:false,
        gptmovies:null,
        movienames:null,
        movieresult:null,

    },
    reducers:{
     togglegptserachview:   (state)=>{
        state.showgptsearch=!state.showgptsearch;

         // used to show or hide my searchgpt page
     },
     addgptmovieresult:(state,action)=>{
     const{ movienames,movieresult} =action.payload;

      state.movienames= movienames;
      state.movieresult = movieresult;
      
     },

    }

})
export const {togglegptserachview,addgptmovieresult}= gptSlice.actions;
export default gptSlice.reducer;