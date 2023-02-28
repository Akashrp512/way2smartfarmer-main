import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { NEW_COMPARISION_RESET, NEW_CROP_RESET, NEW_PRODUCT_RESET } from '../../constants/productConstants';
import { clearErrors,  } from '../../actions/productAction';
import { createComparision, createCrop, createInsights } from '../../actions/cropAction';

import MetaData from '../Layouts/MetaData';
import BackdropLoader from '../Layouts/BackdropLoader';

const Market = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector((state) => state.newCompare);
 




  const [monthly_price_comp, setMonthly_price_comp] = useState('');
  const [quarterly_price_comp, setQuarterly_price_comp] = useState('');
  const [seasonal_price_comp, setSeasonal_price_comp] = useState('');
  const [monthly_summary_comp, setMonthly_summary_comp] = useState('');
  const [quarterly_summary_comp, setQuarterly_summary_comp] = useState('');
  const [seasonal_summary_comp, setSeasonal_summary_comp] = useState('');
  const [monthly_bull_comp, setMonthly_bull_comp] = useState('');
  const [quarterly_bull_comp, setQuarterly_bull_comp] = useState('');
  const [seasonal_bull_comp, setSeasonal_bull_comp] = useState('');
  const [monthly_bear_comp, setMonthly_bear_comp] = useState('');
  const [quarterly_bear_comp, setQuarterly_bear_comp] = useState('');
  const [seasonal_bear_comp, setSeasonal_bear_comp] = useState('');









 
  const newComparisionSubmitHandler = (e) => {
    e.preventDefault();

    // required field checks

    const formDataCompare = new FormData();

    formDataCompare.set('monthly_price_comp', monthly_price_comp);
    formDataCompare.set('quarterly_price_comp', quarterly_price_comp);
    formDataCompare.set('seasonal_price_comp', seasonal_price_comp);

    formDataCompare.set('monthly_summary_comp', monthly_summary_comp);
    formDataCompare.set('quarterly_summary_comp', quarterly_summary_comp);
    formDataCompare.set('seasonal_summary_comp', seasonal_summary_comp);

    formDataCompare.set('monthly_bull_comp', monthly_bull_comp);
    formDataCompare.set('quarterly_bull_comp', quarterly_bull_comp);
    formDataCompare.set('seasonal_bull_comp', seasonal_bull_comp);

    formDataCompare.set('monthly_bear_comp', monthly_bear_comp);
    formDataCompare.set('quarterly_bear_comp', quarterly_bear_comp);
    formDataCompare.set('seasonal_bear_comp', seasonal_bear_comp);
   
    
   

 

     dispatch(createComparision(formDataCompare));
    
  };

  

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (success) {
      enqueueSnackbar('Compare Created', { variant: 'success' });
      dispatch({ type: NEW_COMPARISION_RESET });
      navigate('/compares');
    }
  }, [dispatch, error, success, navigate, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Admin: New Crop | way2smartfarmer" />

      {loading && <BackdropLoader />}
     
      {/* Comparision */}
      <h1 className="font-medium">Comparision</h1>
      <form
        onSubmit={newComparisionSubmitHandler}
        encType="multipart/form-data"
        className="grid grid-cols-2 sm:flex-row bg-white rounded-lg shadow p-4"
        id="mainform"
      >
        
        <div className="flex flex-col gap-3 m-2 sm:w-1/2">
        <h2 className="font-medium">Price Outlook</h2>
          
          <TextField
            label="Monthly Price Outlook"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={monthly_price_comp}
            onChange={(e) => setMonthly_price_comp(e.target.value)}
          />
           <TextField
            label="Quarterly Price Outlook"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={quarterly_price_comp}
            onChange={(e) => setQuarterly_price_comp(e.target.value)}
          />
           <TextField
            label="SeasonalPrice Outlook"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={seasonal_price_comp}
            onChange={(e) => setSeasonal_price_comp(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3 m-2 sm:w-1/2">
        <h2 className="font-medium">Summery & Review</h2>
          
          <TextField
            label="Monthly Summery & Review"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={monthly_summary_comp}
            onChange={(e) => setMonthly_summary_comp(e.target.value)}
          />
           <TextField
            label="Quarterly Summery & Review"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={quarterly_summary_comp}
            onChange={(e) => setQuarterly_summary_comp(e.target.value)}
          />
           <TextField
            label="Yearly Summery & Review"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={seasonal_summary_comp}
            onChange={(e) => setSeasonal_summary_comp(e.target.value)}
          />
        </div>
       
        <div className="flex flex-col gap-3 m-2 sm:w-1/2">
        <h2 className="font-medium">Bull & Bear Factor</h2>
          
          <TextField
            label="Monthly Bull Factor"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={monthly_bull_comp}
            onChange={(e) => setMonthly_bull_comp(e.target.value)}
          />
          <TextField
            label="Monthly Bear Factor"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={monthly_bear_comp}
            onChange={(e) => setMonthly_bear_comp(e.target.value)}
          />
           <TextField
            label="Quarterly Bull Factor"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={quarterly_bull_comp}
            onChange={(e) => setQuarterly_bull_comp(e.target.value)}
          />
               <TextField
            label="Quarterly Bear Factor"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={quarterly_bear_comp}
            onChange={(e) => setQuarterly_bear_comp(e.target.value)}
          />
           <TextField
            label="Seasonal Bull Factor"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={seasonal_bull_comp}
            onChange={(e) => setSeasonal_bull_comp(e.target.value)}
          />
           <TextField
            label="Seasonal Bear Factor"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={seasonal_bear_comp}
            onChange={(e) => setSeasonal_bear_comp(e.target.value)}
          />
          <div className="flex  justify-end">
            <input
              form="mainform"
              type="submit"
              className="bg-primary-orange uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
              value="Submit"
            />
          </div>
        </div>
       
     
      </form>
       
    </>
  );
};

export default Market;
