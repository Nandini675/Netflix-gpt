
import Header from './Header';
import useNowplayingmovies from '../hooks/useNowplayingmovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularmovies from '../hooks/usePopularmovies';
import useTopratedovies from '../hooks/useTopratedmovies';
import useUpcomingmovies from '../hooks/useUpcomingmovies';

const Browse = () => {
   
useNowplayingmovies();
usePopularmovies();
useTopratedovies();
useUpcomingmovies();
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