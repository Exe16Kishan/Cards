import React from 'react'
import brain from './brain.png'
import search from './search.png'
function Nav() {
  return (
<>
<div className=' flex justify-around w-screen items-center bg-slate-500'>

  <div className='flex items-center '>
    <img src={brain} className=' h-16 w-16' />
    <h3 className='font-extrabold'>Brain Strom</h3>
  </div>

  <div className=' inline-flex gap-10 text-center font-medium'>
    <h3 className='cursor-pointer'>Home</h3>
    <h3 className='cursor-pointer'>Products</h3>
    <h3 className='cursor-pointer'>About</h3>
  </div>

  <div className='flex items-center  bg-slate-400 rounded-full'>
    <input className='outline-none border-none bg-transparent px-3' />
    <img src={search} className=' cursor-pointer h-8 px-2 py-1' placeholder='search ' />
  </div>



</div>

</>

    )
}

export default Nav