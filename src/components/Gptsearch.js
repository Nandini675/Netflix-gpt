import React from 'react'
import GptSearchbar from './GptSearchbar';
import GptMoviesuggestion from './GptMoviesuggestion';
import { BG_URL } from '../utils/Constants';
const Gptsearch = () => {
  return (
    <div>
 <div className="absolute -z-10" >
  {/* -z inex ttaki yeh bg piche jaaye */}
      <img src={BG_URL}
      alt= "back-ground"/>
      </div>
<GptSearchbar/>
<GptMoviesuggestion/>
    </div>
  )
}

export default Gptsearch;