import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import coffeimg from '../../images/coffe.jpg'
import arecaimg from '../../images/Arecanut-Cultivation.jpg'

const Crop = ({_id,name,images,description}) => {
  
  const [coffe,setCofee] = useState(false);
  const [arecanut,setArecanut] = useState(false);
  const [pepper,setPepper] = useState(false);
  const [coconut,setCoconut] = useState(false);
  const [cashew,setCashew] = useState(false);
  const [maize,setMaize] = useState(false);
  const [tur,setTur] = useState(false);
  const [cotton,setCotton] = useState(false);
  const [onion,setOnion] = useState(false);
  const [tomato,setTomato] = useState(false);

  if(coffe){
    return <Navigate to={`/crop/coffee`} replace />
} else if (arecanut){
  return <Navigate to={`/crop/arecanut`} replace />
} else if (pepper){
  return <Navigate to={`/crop/pepper`} replace />
} else if (coconut){
  return <Navigate to={`/crop/coconut`} replace />
} else if (cashew){
  return <Navigate to={`/crop/cashew`} replace />
} else if (maize){
  return <Navigate to={`/crop/maize`} replace />
} else if (tur){
  return <Navigate to={`/crop/tur`} replace />
} else if (coconut){
  return <Navigate to={`/crop/cotton`} replace />
} else if (onion){
  return <Navigate to={`/crop/onion`} replace />
} else if (tomato){
  return <Navigate to={`/crop/tomato`} replace />
}

  return (
    <div  className='grid grid-cols-3'  >
       <div
       onClick={()=>setCofee(true)}
        className="flex flex-col items-center text-center group  bg-primary-green m-5 rounded-lg"
      >
        <div className="w-44 h-48" >
          {/* <img
            draggable="false"
            className="w-full h-full object-contain p-2"
            src={images && images[0].url}
            alt={name}
          /> */}
          <img 
          draggable="false"
          className="w-full h-full object-contain p-2"
          src={coffeimg}
          alt='coffee'
          />
        </div>
        <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left text-white font-light">
          {/* {name.length > 85 ? `${name.substring(0, 85)}...` : name} */}
          Coffee
        </h2>
      </div>
       <div
       onClick={()=>setArecanut(true)}
        className="flex flex-col items-center text-center group  bg-primary-green m-5 rounded-lg"
      >
        <div className="w-44 h-48" >
        
          <img 
          draggable="false"
          className="w-full h-full object-contain p-2"
          src={arecaimg}
          alt='arecanut'
          />
        </div>
        <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left text-white font-light">
          {/* {name.length > 85 ? `${name.substring(0, 85)}...` : name} */}
          Arecanut
        </h2>
      </div>
      <div
       onClick={()=>setPepper(true)}
        className="flex flex-col items-center text-center group  bg-primary-green m-5 rounded-lg"
      >
        <div className="w-44 h-48" >
        
          <img 
          draggable="false"
          className="w-full h-full object-contain p-2"
          src={arecaimg}
          alt='arecanut'
          />
        </div>
        <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left text-white font-light">
          {/* {name.length > 85 ? `${name.substring(0, 85)}...` : name} */}
          Pepper
        </h2>
      </div>
      <div
       onClick={()=>setCoconut(true)}
        className="flex flex-col items-center text-center group  bg-primary-green m-5 rounded-lg"
      >
        <div className="w-44 h-48" >
        
          <img 
          draggable="false"
          className="w-full h-full object-contain p-2"
          src={arecaimg}
          alt='arecanut'
          />
        </div>
        <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left text-white font-light">
          {/* {name.length > 85 ? `${name.substring(0, 85)}...` : name} */}
          Coconut & Copra
        </h2>
      </div>
      <div
       onClick={()=>setCashew(true)}
        className="flex flex-col items-center text-center group  bg-primary-green m-5 rounded-lg"
      >
        <div className="w-44 h-48" >
        
          <img 
          draggable="false"
          className="w-full h-full object-contain p-2"
          src={arecaimg}
          alt='arecanut'
          />
        </div>
        <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left text-white font-light">
          {/* {name.length > 85 ? `${name.substring(0, 85)}...` : name} */}
          Cashew Nut
        </h2>
      </div>
      <div
       onClick={()=>setMaize(true)}
        className="flex flex-col items-center text-center group  bg-primary-green m-5 rounded-lg"
      >
        <div className="w-44 h-48" >
        
          <img 
          draggable="false"
          className="w-full h-full object-contain p-2"
          src={arecaimg}
          alt='arecanut'
          />
        </div>
        <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left text-white font-light">
          {/* {name.length > 85 ? `${name.substring(0, 85)}...` : name} */}
          Maize
        </h2>
      </div>
      <div
       onClick={()=>setTur(true)}
        className="flex flex-col items-center text-center group  bg-primary-green m-5 rounded-lg"
      >
        <div className="w-44 h-48" >
        
          <img 
          draggable="false"
          className="w-full h-full object-contain p-2"
          src={arecaimg}
          alt='arecanut'
          />
        </div>
        <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left text-white font-light">
          {/* {name.length > 85 ? `${name.substring(0, 85)}...` : name} */}
          Tur
        </h2>
      </div>
      <div
       onClick={()=>setCotton(true)}
        className="flex flex-col items-center text-center group  bg-primary-green m-5 rounded-lg"
      >
        <div className="w-44 h-48" >
        
          <img 
          draggable="false"
          className="w-full h-full object-contain p-2"
          src={arecaimg}
          alt='arecanut'
          />
        </div>
        <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left text-white font-light">
          {/* {name.length > 85 ? `${name.substring(0, 85)}...` : name} */}
          Cotton
        </h2>
      </div>
      <div
       onClick={()=>setOnion(true)}
        className="flex flex-col items-center text-center group  bg-primary-green m-5 rounded-lg"
      >
        <div className="w-44 h-48" >
        
          <img 
          draggable="false"
          className="w-full h-full object-contain p-2"
          src={arecaimg}
          alt='arecanut'
          />
        </div>
        <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left text-white font-light">
          {/* {name.length > 85 ? `${name.substring(0, 85)}...` : name} */}
          Onion
        </h2>
      </div>
      <div
       onClick={()=>setTomato(true)}
        className="flex flex-col items-center text-center group  bg-primary-green m-5 rounded-lg"
      >
        <div className="w-44 h-48" >
        
          <img 
          draggable="false"
          className="w-full h-full object-contain p-2"
          src={arecaimg}
          alt='arecanut'
          />
        </div>
        <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left text-white font-light">
          {/* {name.length > 85 ? `${name.substring(0, 85)}...` : name} */}
          Tomato
        </h2>
      </div>
      
      
    </div>
  )
}

export default Crop