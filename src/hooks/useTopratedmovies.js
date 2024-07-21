import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addtopratedmovies } from '../utils/movieSlice';
import { useEffect } from 'react';
const  useTopratedovies = () =>{
      // ftech data from tndbapi and update store
 const  dispatch = useDispatch();
 const gettopratedmovies = async()=>{
   const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS );// it will return a promise
    const json = await data.json();// to convert my data into readable form
   
    
    dispatch(addtopratedmovies(json.results));

    
 }
// making api call inside useeffect so that it can call it only once
 useEffect (()=>{

   gettopratedmovies();

 },[])
}
export default useTopratedovies;