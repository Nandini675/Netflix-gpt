import React, { useEffect } from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANG } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { adduser,removeuser } from '../utils/Userslice';
import { togglegptserachview } from '../utils/gptSlice';
import { chooseLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const dispatch= useDispatch();
 
  const showgptsearch =useSelector((store)=>store.gpt.showgptsearch);



  const handlesignout=() =>{
  
  signOut(auth).then(() => {
    // Sign-out successful.
  
    
  }).catch((error) => {
    // An error happened.
    navigate("/error");
  });};

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties// signup
        // https://firebase.google.com/docs/reference/js/auth.user
        const{ uid, email, displayName ,photoURL}= user;
        dispatch(adduser({uid: uid,email:email,displayName:displayName, photoURL:photoURL}));
       navigate("/browser");
        
        // ...
      } else {
        // User is signed out
        // ...
  dispatch(removeuser());
  navigate("/");
      }
    });
    // unsubscribe when component unmount
  return () => unsubscribe();
  },[]);
 const handlegptsearchclick=() =>{
  // toggle gpt search
  dispatch(togglegptserachview());
 
}
 const handlelanguagechange =(e)=>{

  dispatch(chooseLanguage( e.target.value));
 
}
 


  return (


    <div className=' absolute px-8 py-2 bg-gradient-to-b from-black  z-10 w-screen flex  flex-col    md:justify-between bg-black  md:flex-row  '>
        <img className="w-44 mx-auto md:mx-0"
        src={LOGO}
         alt ="Logo"/>
 {/* yeh user icon tabhi display krna hai ja user data ho yaani sign in ho  */}
{user &&  (<div className='flex p-2 justify-between'  >
 {showgptsearch&& (<select className='p-2 m-2 bg-gray-500 text-white'onChange={handlelanguagechange} >
    {/* /* this value has the same keyword as we use in langconstants */} */
{SUPPORTED_LANG.map((lang) => (<option key= 
{lang.identifier} value={lang.identifier}>
  {lang.name} </option>))}
   
  </select>)}
<button className='py-2 px-4 mx-4 my-2 bg-purple-600
 text-white rounded-lg'

onClick={handlegptsearchclick}>
  {showgptsearch ?"HomePage":"GPTSearch"}
  
  </button>

   <img className="hidden md:block  w-10 h-10  rounded-lg"    
    alt="usericon" src={user.photoURL}/>
   <button  className="font-bold text-white"
   onClick={handlesignout }
   
   >(Sign Out)</button>
 </div> )} 


    </div>
    
  )

}
export default Header