import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

const[issigninform,setissigninform]= useState(true);

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
      <form  className='  absolute p-12 bg-black bg-opacity-80  my-24   w-4/12 mx-auto left-0 right-0 h-auto rounded-lg text-white'>
    <h1 className=' font-bold text-3xl  text-white' >{ issigninform? "Sign In":"Sign Up"}</h1>
   {!issigninform &&(
   <input  type="text" placeholder='Name' className='p-4 my-4 w-full bg-gray-600'  ></input>)}
   <input  type="text" placeholder='E-mail-Address' className='p-4 my-4 w-full bg-gray-600'  ></input>
   
   
    <input   type ="password" placeholder='password' className='p-4 my-4 w-full bg-gray-600'>
   </input>
   <button  className="py-4 my-4  bg-red-700 w-full  rounded-lg " > { issigninform? "Sign In":"Sign Up"}</button>
<p  className='py-4  cursor-pointer'onClick={togglesigninform}>
{ issigninform? " New to netflix?.. Sign Up Now":"Already registered ? Sign In Now"}
 
</p>
  </form>



    </div>

  )
}

export default Login