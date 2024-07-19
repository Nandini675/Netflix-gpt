import React from 'react'
import useMovietrailer from '../hooks/useMovietrailer';
import {  useSelector } from 'react-redux';
const Vdeobg = ({movieid}) => {
  const trailervdeo =useSelector(store =>store.movies?.trailervdeo);
  useMovietrailer(movieid );
  return (
    <div className=''>
<iframe className=' w-screen aspect-video'

src={"https://www.youtube.com/embed/"+ trailervdeo?.key +
  "?si=3jFGvcQHy9iVuyXu +?&autoplay=1&mute=1"}
 title="YouTube video player" 
 allow="accelerometer;
  autoplay; clipboard-write; 
  encrypted-media; gyroscope; 
  picture-in-picture; web-share" 
  referrerPolicy="strict-origin-when-cross-origin"
></iframe>
    </div>
  )
}

export default Vdeobg;