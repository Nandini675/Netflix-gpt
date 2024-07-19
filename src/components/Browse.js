
import Header from './Header';
import useNowplayingmovies from '../hooks/useNowplayingmovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
const Browse = () => {
   
useNowplayingmovies();
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
{/*  main container
          -vdeotitle 
          -vdeobackgrnd
      
        -sec container
          -movie list*n
           -cards*n
        */}


    </div>
  )
}

export default Browse;