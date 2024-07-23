import { API_OPTIONS } from '../utils/Constants'
import { useEffect } from 'react';
import { addTrailervdeo } from '../utils/movieSlice';
 import { useDispatch, useSelector } from 'react-redux';
 
 
   


const useMovietrailer =(movieid) =>{ 
 // movieid-> vd&& updating the store with trailer vdeo data
 const  dispatch = useDispatch( );

 const trailervdeo = useSelector((store) => store.movies.trailervdeo);
 const  getmovievdeo = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieid+'/videos?language=en-US', API_OPTIONS)
const json = await data.json();

const filterdata = json.results.filter((video)=>video.type==="Trailer");// trailer naam se bhi bohot sari entries aa rhi hai
const trailer =  filterdata.length? filterdata[0]: json.results[0];// in case trailer exist nhi krta toh

// so we decided to take the first one


dispatch(addTrailervdeo(trailer))
};
useEffect(()=>{
   !trailervdeo &&
   getmovievdeo();
},[]);


}
export default useMovietrailer;