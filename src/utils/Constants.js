 export  const  LOGO ='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
//  export const USER_AVTAR= "https://image.shutterstock.com/image-vector/cute-pikachu-characters-on-pokemongo-260nw-2420629857.jpg";
export const USER_AVTAR="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
 export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+ process.env.REACT_APP_TMDB_KEY ,},
  };
  export const IMG_CDN_URL="http://image.tmdb.org/t/p/w780";
   export const BG_URL ="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg" ;
   export const SUPPORTED_LANG =[
    {identifier:"en", name:"English"},
  {identifier:"hindi", name:"Hindi"},
   {identifier:"french", name:"French"}
  ]; 
   export const GEMAI_KEY = process.env.REACT_APP_GEMAI_KEY;
   export const GOOGLE_API=process.env.REACT_APP_GOOGLE_KEY;