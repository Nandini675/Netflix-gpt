import React from 'react'
import { useSelector } from 'react-redux';
import Movielist from"./Movielist";

const GptMoviesuggestion = () => {
  const {movieresult,movienames}=useSelector( (store)=> store.gpt);
 
 if (!movienames) return  null;
return (
<div className='p-4 m-4 bg-black text-white bg-opacity-90'>

<div>
  {movienames.map((movieName ,index )=> 
  <Movielist  key={movieName} 
  title={movieName} 
  movies={movieresult[index]}/>)}
 


</div>

</div>
  )
}

export default GptMoviesuggestion;