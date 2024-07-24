import React from 'react'

const Vdeotitle = ({title,overview
}
) => {
  return (
    <div className=' w- screen aspect-video pt-[20%]   px-6 md:px-24 absolute  bg-gradient-to-r from-black text-white  '> 
    {/* by absolute my title should come on top */}
        <h1 className='  text-2xl font-bold md:text-6xl'>{title}</h1>
        <p className=' hidden  md:inline-block py-5 text-lg w-1/2'>{overview}</p>
        <div className=' my-4 md:m-0' >
            <button className='bg-white text-black md:py-4  py-1  px-2 md:px-5   text-xl  rounded-lg hover:bg-opacity-80'> 
            Play</button>
            <button className=' hidden  md:inline-block bg-gray-500 text-white p-4  px-5text-xl mx-2 bg-opacity-50 rounded-lg'> More Info</button>
        </div>
    </div>
  )
}

export default Vdeotitle;