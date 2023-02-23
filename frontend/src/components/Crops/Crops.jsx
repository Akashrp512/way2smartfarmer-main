import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Pagination from '@mui/material/Pagination';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Slider from '@mui/material/Slider';
import { useSnackbar } from 'notistack';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { clearErrors, getProducts } from '../../actions/productAction';
import Loader from '../Layouts/Loader';
import MinCategory from '../Layouts/MinCategory';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StarIcon from '@mui/icons-material/Star';
import { categories } from '../../utils/constants';
import MetaData from '../Layouts/MetaData';
import { getRandomProducts } from '../../utils/functions';
import { useLocation } from 'react-router-dom';
import { getCrops } from '../../actions/cropAction';
import Crop from './Crop';

const Crops = () => {

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const params = useParams();
    const location = useLocation();

    const [price, setPrice] = useState([0, 200000]);
    const [category, setCategory] = useState(location.search ? location.search.split("=")[1] : "");
    const [ratings, setRatings] = useState(0);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);

    // filter toggles
    const [categoryToggle, setCategoryToggle] = useState(true);
    const [ratingsToggle, setRatingsToggle] = useState(true);

    const { crops, loading, error, } = useSelector((state) => state.crops);
    const keyword = params.keyword;


    const priceHandler = (e, newPrice) => {
        setPrice(newPrice);
    }

    const clearFilters = () => {
        setPrice([0, 200000]);
        setCategory("");
        setRatings(0);
    }

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: "error" });
            dispatch(clearErrors());
        }
        dispatch(getCrops(keyword, category, price, ratings, currentPage));
    }, [dispatch, keyword, category, price, ratings, currentPage, error, enqueueSnackbar]);

    return (
        <>
            <MetaData title="AllCrops | Way2SmartFarmer" />

   
            <main className="w-full mt-14 sm:mt-0">

                {/* <!-- row --> */}
                <div className="flex gap-3 mt-2 sm:mt-2 sm:mx-3 m-auto mb-7">

                   
                   
                      {/* <!-- search column --> */}
                      <div className="flex-1">

{!loading && crops?.length === 0 && (
    <div className="flex flex-col items-center   justify-center gap-3 bg-white shadow-sm rounded-sm p-6 sm:p-16">
        <img draggable="false" className="w-1/2 h-44 object-contain" src="https://www.way2smartfarmer.com/img/logo.jpeg" alt="Search Not Found" />
        <h1 className="text-2xl font-medium text-gray-900">Sorry, no results found!</h1>
        <p className="text-xl text-center text-primary-grey">Please check the spelling or try searching for something else</p>
    </div>
)}

{loading ? <Loader /> : (
    <div className="flex flex-col gap-2 pb-4 justify-center items-center w-full overflow-hidden bg-white">

        <div className="grid    grid-cols-1 mt-20 sm:grid-cols-4 w-full place-content-start overflow-hidden pb-4 border-b">
            {crops?.map((crop) => (
                <>
                  {/* <h1>{crop.name}</h1>
                  <h1>{crop.description}</h1>
                    <img src={crop.images[0].url} alt={crop.name}/> */}
                    <Crop {...crop} key={crop._id} />
                  </>
                ))
            }
            
         
        </div>
        {/* {filteredCropsCount > resultPerPage && (
            <Pagination
                count={Number(((filteredCropsCount + 6) / resultPerPage).toFixed())}
                page={currentPage}
                onChange={(e, val) => setCurrentPage(val)}
                color="primary"
            />
        )} */}
    </div>
)}
</div>
{/* <!-- search column --> */}
                </div >
                {/* <!-- row --> */}

            </main >
        </>
    );
};

export default Crops;
