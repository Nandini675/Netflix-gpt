import React, { useRef } from 'react'
import lang from '../utils/Languageconstants';
import { useDispatch, useSelector } from 'react-redux';

import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GEMAI_KEY } from '../utils/Constants';
import { addgptmovieresult } from '../utils/gptSlice';
const GptSearchbar = () => {
 const langkey = useSelector((store)=>store.config.lang)
  const searchtext = useRef(null);
  const genAI = new GoogleGenerativeAI(GEMAI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const dispatch=useDispatch();
 // search movie in tmdb

  const searchmovietmdb = async(movie) =>{
     const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);

     const json =  await data.json()
     return json.results;
  }




 const handlegptsearchclick = async() =>{
// console.log(searchtext.current.value);// yeh mujhe searchtext ki value dega
// make an api callto gptapi and get movie result
// to make  agood prompt
const gptQuery =" act as a movie reccomendation system and suggest some movie for the query"+searchtext.current.value+".only give me names of 5 movies,comma sepearted like the example reult ahead. Example:Highway, Sanju,Yeh Jawani Hai Deewani ";
const gptresult = await model.generateContent(gptQuery);
const response = await gptresult.response;
const text = response.text();
//  console.log(text);//  hungama,chup cup ke
 // extracting those movies inside an array
 const gptmovielist = text.split(","); 
 //[hungama,chupke chupke..]
// for each movie i will  search tmdb api
  const  promisearray =  gptmovielist.map ( (movie) =>searchmovietmdb(movie)); 
  // being an asyn f/n  it will take tym to execute and return promise if called immediately
   const tmdbresults = await Promise.all(promisearray);
   console.log(tmdbresults);
   dispatch(addgptmovieresult({movienames:gptmovielist,movieresult: tmdbresults}));
 }



  return (
    <div className=' pt-[10%]  flex justify-center'>
       <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>     
       {/* dividong it into 12 col */}
        <input  ref={searchtext}
        
        type ="text" className='p-4 m-4 col-span-9'  placeholder={lang[langkey].gptsearchplaceholder}></input>
       
        <button className='py-2 px-4 bg-red-600
          text-white rounded-lg col-span-3 m-4
        'onClick={handlegptsearchclick} >
          {lang[langkey].search}
          </button>
        </form> 
      
    </div>
  )
}

export default GptSearchbar;