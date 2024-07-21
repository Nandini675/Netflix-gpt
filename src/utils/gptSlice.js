import { createSlice } from "@reduxjs/toolkit";

  const gptSlice= createSlice({
   
    name:'gpt',
    initialState:{
        showgptsearch:false
    },
    reducers:{
     togglegptserachview:   (state)=>{
        state.showgptsearch=!state.showgptsearch;

         // used to show or hide my searchgpt page
     }

    }

})
export const {togglegptserachview}= gptSlice.actions;
export default gptSlice.reducer;