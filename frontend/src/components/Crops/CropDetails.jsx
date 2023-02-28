import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'



const CropDetails = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/api/v1/compare/63fc69580c7b17a6babd1c5e")
      .then(response => response.json())
      .then(json => setData(json.compare))
      .catch(error => console.error(error));
  },[])
   
  return (
    <div className='mt-20'>
     {data ? (
        <div>
          <h2>Monthly Price Comparison:</h2>
          <p>{data.monthly_price_comp}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default CropDetails