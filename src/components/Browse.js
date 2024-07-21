
import Header from './Header';
import useNowplayingmovies from '../hooks/useNowplayingmovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularmovies from '../hooks/usePopularmovies';
import useTopratedovies from '../hooks/useTopratedmovies';
import useUpcomingmovies from '../hooks/useUpcomingmovies';
import Gptsearch from './Gptsearch';
import { useSelector } from 'react-redux';

const Browse = () => {
    const showgptsearch =useSelector(store=> store.gpt.showgptsearch);
useNowplayingmovies();
usePopularmovies();
useTopratedovies();
useUpcomingmovies();
  return (
    <div>
      <Header/>
      {
        showgptsearch? <Gptsearch/>:
         <> 
        <Maincontainer/>
        <Secondarycontainer/>
        </>
      }
     
    
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