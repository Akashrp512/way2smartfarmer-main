import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import coffeimg from '../../images/coffe.jpg'
import arecaimg from '../../images/Arecanut-Cultivation.jpg'

const Crop = ({_id,name,images,description}) => {



  return (
    <div  className='flex flex-col '  >
       <Link
       to={`/crop/${_id}`}
        className="flex flex-col items-center text-center group  bg-primary-green m-5 rounded-lg"
      >
        <div className="w-44 h-48" >
          <img
            draggable="false"
            className="w-full h-full object-contain p-2"
            src={images && images[0].url}
            alt={name}
          />
        
        </div>
        <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left text-white font-light">
          {name.length > 85 ? `${name.substring(0, 85)}...` : name}
          
        </h2>
      </Link>
     

 
      
      
    </div>
  )
}

export default Crop