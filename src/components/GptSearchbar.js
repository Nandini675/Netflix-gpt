import React from 'react'
import lang from '../utils/Languageconstants';
import { useSelector } from 'react-redux';
const GptSearchbar = () => {
 const langkey = useSelector((store)=>store.config.lang)




  return (
    <div className=' pt-[10%]  flex justify-center'>
       <form className='w-1/2 bg-black grid grid-cols-12'>     
       {/* dividong it into 12 col */}
        <input type ="text" className='p-4 m-4 col-span-9'  placeholder={lang[langkey].gptsearchplaceholder}></input>
       
        <button className='py-2 px-4 bg-red-600
          text-white rounded-lg col-span-3 m-4
        '>
          {lang[langkey].search}
          </button>
        </form> 
      
    </div>
  )
}

export default GptSearchbar;