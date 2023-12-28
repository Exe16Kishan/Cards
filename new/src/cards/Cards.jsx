import React from 'react'
import img from './img1.webp'
function Cards() {

  return (
    <>
    
    <div className=" flex justify-center items-center h-screen
     
     ">
        
        {/* upper */}
        <div className="  ">
        <img src={img}  className='h-60 '  />
        {/* kishan */}
        
        </div>
        {/* lower */}
        <div className=" bg-slate-500 h-80 w-80 ">

        </div>

    </div>
    
    </>
  )
}

export default Cards