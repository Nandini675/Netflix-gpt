
import React from 'react'
import { useSelector } from 'react-redux';
import Vdeobg from './Vdeobg';
import Vdeotitle from './Vdeotitle';
const Maincontainer = () => {

    const movies= useSelector( store => store.movies?.nowplayingmovies)// it will contain 20 movies
    if(movies==null) return;// also known as early reaturn
  const mainmovie = movies[0]; 
 
   const{original_title, overview, id } =  mainmovie;
    return (
    <div>

<Vdeotitle  title={original_title} overview={overview} />
<Vdeobg movieid={id}/>


    </div>
  )
}

export default Maincontainer;