import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { NEW_COMPARISION_RESET, NEW_CROP_RESET, NEW_INSIGHTS_RESET, NEW_PRODUCT_RESET } from '../../constants/productConstants';
import { clearErrors,  } from '../../actions/productAction';
import { createComparision, createCrop, createInsights } from '../../actions/cropAction';

import MetaData from '../Layouts/MetaData';
import BackdropLoader from '../Layouts/BackdropLoader';

const Mitra = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector((state) => state.newInsight);
 






  const [monthly_price_insight, setMonthly_price_insight] = useState('');
  const [quarterly_price_insight, setQuarterly_price_insight] = useState('');
  const [seasonal_price_insight, setSeasonal_price_insight] = useState('');
  const [monthly_summary_insight, setMonthly_summary_insight] = useState('');
  const [quarterly_summary_insight, setQuarterly_summary_insight] = useState('');
  const [seasonal_summary_insight, setSeasonal_summary_insight] = useState('');
  const [monthly_bull_insight, setMonthly_bull_insight] = useState('');
  const [quarterly_bull_insight, setQuarterly_bull_insight] = useState('');
  const [seasonal_bull_insight, setSeasonal_bull_insight] = useState('');








 
  
  const newInsightsSubmitHandler = (e) => {
    e.preventDefault();

    // required field checks

    const formDataInsights = new FormData();

    formDataInsights.set('monthly_price_insight', monthly_price_insight);
    formDataInsights.set('quarterly_price_insight', quarterly_price_insight);
    formDataInsights.set('seasonal_price_insight', seasonal_price_insight);

    formDataInsights.set('monthly_summary_insight', monthly_summary_insight);
    formDataInsights.set('quarterly_summary_insight', quarterly_summary_insight);
    formDataInsights.set('seasonal_summary_insight', seasonal_summary_insight);

    formDataInsights.set('monthly_bull_insight', monthly_bull_insight);
    formDataInsights.set('quarterly_bull_insight', quarterly_bull_insight);
    formDataInsights.set('seasonal_bull_insight', seasonal_bull_insight);

     dispatch(createInsights(formDataInsights));
    
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (success) {
      enqueueSnackbar('Insights Created', { variant: 'success' });
      dispatch({ type: NEW_INSIGHTS_RESET });
      navigate('/insights');
    }
  }, [dispatch, error, success, navigate, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Admin: New INSIGHTS | way2smartfarmer" />

      {loading && <BackdropLoader />}
     
       
        <h1 className="font-medium">Insights</h1>
      <form
        onSubmit={newInsightsSubmitHandler}
        encType="multipart/form-data"
        className="grid grid-cols-2 sm:flex-row bg-white rounded-lg shadow p-4"
        id="mainform"
      >
        
        <div className="flex flex-col gap-3 m-2 sm:w-1/2">
        <h2 className="font-medium">Monthly Insights</h2>
          
          <TextField
            label="Monthly Price Outlook"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={monthly_price_insight}
            onChange={(e) => setMonthly_price_insight(e.target.value)}
          />
           <TextField
            label="Quarterly  Price Outlook"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={quarterly_price_insight}
            onChange={(e) => setQuarterly_price_insight(e.target.value)}
          />
           <TextField
            label="Seasonal  Price Outlook"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={seasonal_price_insight}
            onChange={(e) => setSeasonal_price_insight(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3 m-2 sm:w-1/2">
        <h2 className="font-medium">Quarterly Insights</h2>
          
          <TextField
            label="Monthly Summery & Review"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={monthly_summary_insight}
            onChange={(e) => setMonthly_summary_insight(e.target.value)}
          />
           <TextField
            label="Quarterly Summery & Review"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={quarterly_summary_insight}
            onChange={(e) => setQuarterly_summary_insight(e.target.value)}
          />
           <TextField
            label="Seasonal Summery & Review"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={seasonal_summary_insight}
            onChange={(e) => setSeasonal_summary_insight(e.target.value)}
          />
        </div>
       
        <div className="flex flex-col gap-3 m-2 sm:w-1/2">
        <h2 className="font-medium">Seasonal Insights</h2>
          
          <TextField
            label="Monthly Bull & Bear Factor"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={monthly_bull_insight}
            onChange={(e) => setMonthly_bull_insight(e.target.value)}
          />
         
           <TextField
            label="Quarterly Bull & Bear Factor"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={quarterly_bull_insight}
            onChange={(e) => setQuarterly_bull_insight(e.target.value)}
          />
         
           <TextField
            label="Seasonal Bull & Bear Factor"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={seasonal_bull_insight}
            onChange={(e) => setSeasonal_bull_insight(e.target.value)}
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

export default Mitra;
