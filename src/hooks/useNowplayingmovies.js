import { API_OPTIONS } from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { addnowplayingmovies } from '../utils/movieSlice';
import { useEffect } from 'react';
const  useNowplayingmovies = () =>{
      // ftech data from tndbapi and update store
 const  dispatch = useDispatch();
  const nowplayingmovies = useSelector(store => store.movies.nowplayingmovies);

 const getnowplayingmovies = async()=>{
   const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS );// it will return a promise
    const json = await data.json();// to convert my data into readable form
    
    dispatch(addnowplayingmovies(json.results));

    
 }
// making api call inside useeffect so that it can call it only once
 useEffect (()=>{
!nowplayingmovies &&
   getnowplayingmovies();

 },[])
}
export default useNowplayingmovies;