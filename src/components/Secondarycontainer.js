
import React from 'react'
import Movielist from './Movielist';
import { useSelector } from 'react-redux';

const Secondarycontainer = () => {
 const movies = useSelector(store => store.movies);



  return (
    movies.nowplayingmovies&&(
    <div className=' bg-black '>
      <div className='  mt-0 md:-mt-55   pl-4 md:pl-12 relative z-20'>
       <Movielist title={"Now Playing"} movies={movies.nowplayingmovies}/>
      <Movielist title={"Top-Rated"} movies={movies.topratedmovies}/>
<Movielist title={"Popular"} movies={movies.popularmovies}/>
<Movielist title={"Upcoming"} movies={movies.upcomingmovies}/> 
</div>
      
    </div>
  ))
}

export default Secondarycontainer;