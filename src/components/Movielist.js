import React from 'react'
import Moviecard from './Moviecard';

const Movielist = ({title,movies}) => {
 console.log(movies);
    return (
    <div className='px-3 
     ' >
<h1 className='text-3xl py-4 text-white'>{title}</h1>
       <div className='flex overflow-x-scroll fill-black '>
<div className='flex ' >
{ movies?.map((movie) =>(
    
    <Moviecard key ={movie.id} posterPath ={movie.poster_path}/>))}
</div>
        </div> 
      
    </div>

  )
}

export default Movielist;