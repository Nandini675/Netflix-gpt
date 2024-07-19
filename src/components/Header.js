import React, { useEffect } from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { LOGO } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { adduser,removeuser } from '../utils/Userslice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const dispatch= useDispatch();

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

  return (


    <div className=' absolute px-8 py-2 bg-gradient-to-b from-black  z-10 w-screen flex justify-between'>
        <img className="w-44"
        src={LOGO}
         alt ="Logo"/>
 {/* yeh user icon tabhi display krna hai ja user data ho yaani sign in ho  */}
{user &&( <div className='flex p-2'  >
   <img className=" w-10 h-10  rounded-lg"    
    alt="usericon" src={user.photoURL}/>
   <button  className="font-bold text-white"
   onClick={handlesignout }
   
   >(Sign Out)</button>
 </div> )} 


    </div>
    
  )
}

export default Header