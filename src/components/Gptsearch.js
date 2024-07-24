import React from 'react'
import GptSearchbar from './GptSearchbar';
import GptMoviesuggestion from './GptMoviesuggestion';
import { BG_URL } from '../utils/Constants';
const Gptsearch = () => {
  return (
    <>
    <div className="fixed -z-10  " >
  {/* -z inex ttaki yeh bg piche jaaye */}
      <img  className = "h-screen object-cover md:h-max " src={BG_URL} 
      alt= "back-ground"/>
      </div>
    <div className=''>
 
<GptSearchbar/>
<GptMoviesuggestion/>
    </div>
    </>
  )
}

export default Gptsearch;