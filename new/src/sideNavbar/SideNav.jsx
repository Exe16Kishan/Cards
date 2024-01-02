// SideNav.js
import React, { useState } from 'react';
import sni from '../images/sni.png';
import { AiOutlineClose } from "react-icons/ai";

function SideNav({ close }) {
  // const [active, setActive] = useState(true);

  function ToggleButton() {
    // setActive(!active);
    close(true);
  }

 

  return (
    <div className='fixed top-0  h-screen w-60 bg-slate-200 gap-4 '>
      <div className='flex justify-end p-5'>
      <button className=' border-t-2' onClick={ToggleButton}><AiOutlineClose /></button>
      </div>
      
      <div className='my-4 flex flex-col items-center'>
        <img src={sni} className='border-solid border-2 rounded-full border-violet-600  h-28 w-28 object-contain' />
        
      <div><h1>kishan</h1></div>
      </div>
      
    </div>
  );
}

export default SideNav;

