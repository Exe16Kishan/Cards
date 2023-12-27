import React from 'react'
import './Cards.css'
import img from './img1.webp'
function Cards() {

  return (
    <>
    
    <div className="main">
        
        {/* upper */}
        <div className="img-store">
        <img src={img}  />
        
        {/* lower */}
        </div>
        <div className="info">

        </div>

    </div>
    
    </>
  )
}

export default Cards