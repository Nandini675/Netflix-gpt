import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addpopularmovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
const  usePopularmovies = () =>{
      // ftech data from tndbapi and update store
 const  dispatch = useDispatch();
 const popularmovies = useSelector(store => store.movies.popularmovies);

 const getpopularmovies = async()=>{
   const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS );// it will return a promise
    const json = await data.json();// to convert my data into readable form
    
    dispatch(addpopularmovies(json.results));

    
 }
// making api call inside useeffect so that it can call it only once
 useEffect (()=>{
!popularmovies&&
   getpopularmovies();

 },[])
}
export default usePopularmovies;