import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvaliddata } from '../utils/validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import {adduser} from "../utils/Userslice";
import { USER_AVTAR } from '../utils/Constants';
const Login = () => {

const[issigninform,setissigninform]= useState(true);
  const [errormsg,seterrormsg] = useState(null);

const email= useRef(null); // it will create a refuse variable
 const  password = useRef(null);
 const name = useRef(null);
 const dispatch= useDispatch();
const handlbuttonclick =()=>{
  // validate the form data

  const message= issigninform? checkvaliddata(email.current.value,password.current.value):checkvaliddata(email.current.value,password.current.value,name.current.value,setissigninform);
  
  seterrormsg(message);
  if(message) return;

  // create a  new user ,9signin/signup logic
if(!issigninform){
  //signup logic
  createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
// ... also we will update the user profile after signup
updateProfile(user, {
  displayName: name.current.value, photoURL:USER_AVTAR
}).then(() => {
  // Profile updated!
  // updatethe redux store as well as in auth it takes some tym
  const{ uid, email, displayName ,photoURL}= auth.currentUser;// this auth will have the updated user info
  dispatch(adduser
    
    ({uid: uid,email:email,displayName:displayName, photoURL:photoURL}));
     
  console.log(user);

}).catch((error) => {
  // An error occurred
  // ...
  seterrormsg(error.message);
});
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
seterrormsg(errorCode+"-"+ errorMessage);


});
}
else{
  //signin logic

signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
   
    console.log(user);
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormsg(errorCode+"-"+ errorMessage);
  });
}

}

  const togglesigninform =() =>{
setissigninform(!issigninform);
  }

  return (
    <div>
      <Header/>
      <div className="absolute" >
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg" 
      alt= "back-ground"/>
      </div>
      <form  onSubmit ={(e)=>e.preventDefault()} className='  absolute p-12 bg-black bg-opacity-80  my-24   w-4/12 mx-auto left-0 right-0 h-auto rounded-lg text-white'>
    <h1 className=' font-bold text-3xl  text-white' >{ issigninform? "Sign In":"Sign Up"}</h1>
   {!issigninform &&(
   <input  ref={name} type="text" placeholder='Name' className='p-4 my-4 w-full bg-gray-600'  ></input>)}
   <input  ref={email} type="text" placeholder='E-mail-Address' className='p-4 my-4 w-full bg-gray-600'  ></input>
   
    <input ref ={password} type ="password" placeholder='password' className='p-4 my-4 w-full bg-gray-600'>
   </input>
   <p className='text-red-500  font-bold text-lg py-2'>{errormsg}</p>



   <button   className="py-4 my-4  bg-red-700 w-full  rounded-lg " onClick={handlbuttonclick}> { issigninform? "Sign In":"Sign Up"}</button>
<p  className='py-4  cursor-pointer'onClick={togglesigninform}>
{ issigninform? " New to netflix?.. Sign Up Now":"Already registered ? Sign In Now"}
 
</p>
  </form>



    </div>

  )
}

export default Login