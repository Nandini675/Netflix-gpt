import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addupcomingmovies } from '../utils/movieSlice';
import { useEffect } from 'react';
const  useUpcomingmovies = () =>{
      // ftech data from tndbapi and update store
 const  dispatch = useDispatch();
 const getupcomingmovies = async()=>{
   const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS );// it will return a promiSE
    const json = await data.json();// to convert my data into readable form
    console.log(json.results);
    dispatch(addupcomingmovies(json.results));

    
 }
// making api call inside useeffect so that it can call it only once
 useEffect (()=>{

    getupcomingmovies ();

 },[])
}
export default useUpcomingmovies;