import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getCompareDetails, getComparisions } from '../../actions/cropAction';
import { clearErrors } from '../../actions/productAction';

const CropDetails = () => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const params= useParams();

    const {compare,loading,error} = useSelector((state)=>state.compareDetails);

    const compareId = params.id;

    useEffect(() => {
        if (error) {
          enqueueSnackbar(error, { variant: 'error' });
          dispatch(clearErrors());
        }
     
        dispatch(getCompareDetails(compareId));
        // eslint-disable-next-line
      }, [dispatch, error,  enqueueSnackbar]);
    
  return (
    <div className='mt-20'>CropDetails 
    <h1>{compare.monthly_price_comp}</h1>
    </div>
  )
}

export default CropDetails