import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import {
  clearErrors,
  getProductDetails,
  getSimilarProducts,
  newReview,
} from '../../actions/productAction';
import { getCropDetails } from '../../actions/cropAction';
import { NextBtn, PreviousBtn } from '../Home/Banner/Banner';
import ProductSlider from '../Home/ProductSlider/ProductSlider';
import Loader from '../Layouts/Loader';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CachedIcon from '@mui/icons-material/Cached';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import { NEW_REVIEW_RESET } from '../../constants/productConstants';
import { addItemsToCart } from '../../actions/cartAction';
import { getDeliveryDate, getDiscount } from '../../utils/functions';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../actions/wishlistAction';
import MinCategory from '../Layouts/MinCategory';
import MetaData from '../Layouts/MetaData';
import ShareButtons from '../../Share/Shareweb';

const CropDetails = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();
  const navigate = useNavigate();

  // reviews toggle
  const [open, setOpen] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const { crop, loading, error } = useSelector(
    (state) => state.cropDetails
  );
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  const cropId = params.id;
  const itemInWishlist = wishlistItems.some((i) => i.crop === cropId);

  const addToWishlistHandler = () => {
    if (itemInWishlist) {
      dispatch(removeFromWishlist(cropId));
      enqueueSnackbar('Remove From Wishlist', { variant: 'success' });
    } else {
      dispatch(addToWishlist(cropId));
      enqueueSnackbar('Added To Wishlist', { variant: 'success' });
    }
  };



  const addToCartHandler = () => {
    dispatch(addItemsToCart(cropId));
    enqueueSnackbar('Product Added To Cart', { variant: 'success' });
  };

  const itemInCart = cartItems.some((i) => i.product === cropId);

  const goToCart = () => {
    navigate('/cart');
  };

  const buyNow = () => {
    addToCartHandler();
    navigate('/shipping');
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (reviewError) {
      enqueueSnackbar(reviewError, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (success) {
      enqueueSnackbar('Review Submitted Successfully', { variant: 'success' });
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getCropDetails(cropId));
    // eslint-disable-next-line
  }, [dispatch, cropId, error, reviewError, success, enqueueSnackbar]);

  useEffect(() => {
    dispatch(getSimilarProducts(crop?.category));
  }, [dispatch, crop]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData/>
          <MinCategory />
          <main className="mt-12 sm:mt-0">
            {/* <!-- product image & description container --> */}
            <div className="w-full flex flex-col sm:flex-row bg-white sm:p-2 relative">
              {/* <!-- image wrapper --> */}
              <div className="w-full sm:w-2/5 sm:sticky top-16 sm:h-screen">
                {/* <!-- imgbox --> */}
                <div className="flex flex-col gap-3 m-3">
                  <div className="w-full h-full pb-6 border relative">
                    <Slider {...settings}>
                      {crop.images &&
                        crop.images.map((item, i) => (
                          <img
                            draggable="false"
                            className="w-full h-96 object-contain"
                            src={item.url}
                            alt={crop.name}
                            key={i}
                          />
                        ))}
                    </Slider>
                    <div className="absolute top-4 right-4 shadow-lg bg-white w-9 h-9 border flex items-center justify-center rounded-full">
                      <span
                        onClick={addToWishlistHandler}
                        className={`${
                          itemInWishlist
                            ? 'text-red-500'
                            : 'hover:text-red-500 text-gray-300'
                        } cursor-pointer`}
                      >
                        <FavoriteIcon sx={{ fontSize: '18px' }} />
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex gap-3">
                    {/* <!-- add to cart btn --> */}
                    {crop.stock > 0 && (
                      <button
                        onClick={itemInCart ? goToCart : addToCartHandler}
                        className="p-4 w-1/2 flex items-center justify-center gap-2 text-white bg-primary-yellow rounded-sm shadow hover:shadow-lg"
                      >
                        <ShoppingCartIcon />
                        {itemInCart ? 'GO TO CART' : 'ADD TO CART'}
                      </button>
                    )}
                    <button
                      onClick={buyNow}
                      disabled={crop.stock < 1 ? true : false}
                      className={
                        crop.stock < 1
                          ? 'p-4 w-full flex items-center justify-center gap-2 text-white bg-red-600 cursor-not-allowed rounded-sm shadow hover:shadow-lg'
                          : 'p-4 w-1/2 flex items-center justify-center gap-2 text-white bg-primary-orange rounded-sm shadow hover:shadow-lg'
                      }
                    >
                      <FlashOnIcon />
                      {crop.stock < 1 ? 'OUT OF STOCK' : 'BUY NOW'}
                    </button>
                    {/* <!-- add to cart btn --> */}
                  </div>
                </div>
                {/* <!-- imgbox --> */}
              </div>
              {/* <!-- image wrapper --> */}

              {/* <!-- product desc wrapper --> */}
              <div className="flex-1 py-2 px-3">
              <ShareButtons />
                {/* <!-- whole product description --> */}
                <div className="flex flex-col gap-2 mb-4">
                  <h2 className="text-xl">{crop.name}</h2>
                  {/* <!-- rating badge --> */}
                  <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                    <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">
                      {crop.ratings && crop.ratings.toFixed(1)}{' '}
                      <StarIcon sx={{ fontSize: '12px' }} />
                    </span>
                    <span>{crop.numOfReviews} Reviews</span>
                  </span>
                  {/* <!-- rating badge --> */}

                  {/* <!-- price desc --> */}
                  <span className="text-primary-green text-sm font-medium">
                    Special Price
                  </span>
                  <div className="flex items-baseline gap-2 text-3xl font-medium">
                    <span className="text-gray-800">
                      ₹{crop.price?.toLocaleString()}
                    </span>
                    <span className="text-base text-gray-500 line-through">
                      ₹{crop.cuttedPrice?.toLocaleString()}
                    </span>
                    <span className="text-base text-primary-green">
                      {getDiscount(crop.price, crop.cuttedPrice)}
                      %&nbsp;off
                    </span>
                  </div>
                  {crop.stock <= 10 && crop.stock > 0 && (
                    <span className="text-red-500 text-sm font-medium">
                      Hurry, Only {crop.stock} left!
                    </span>
                  )}
                  {/* <!-- price desc --> */}

                  {/* <!-- banks offers --> */}

                  {/* <!-- banks offers --> */}

                 

             

                  {/* <!-- highlights & services details --> */}
                  <div className="flex flex-col sm:flex-row justify-between">
                

                  
                  </div>
                  {/* <!-- highlights & services details --> */}


                  {/* <!-- way2smartfarmer plus banner --> */}
                  <div className="sm:w-1/2 mt-4 border">
                    <img
                      draggable="false"
                      className="w-full h-full object-contain"
                      src="https://www.way2agritech.com/img/5.png"
                      alt=""
                    />
                  </div>
                  {/* <!-- way2smartfarmer plus banner --> */}

                  {/* <!-- description details --> */}
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-14 mt-4 items-stretch text-sm">
                    <p className="text-gray-500 font-medium">Description</p>
                    <span>{crop.description}</span>
                  </div>
                  {/* <!-- description details --> */}

                  {/* <!-- border box --> */}
                  <div className="w-full mt-6 rounded-sm border flex flex-col">
                    <h1 className="px-6 py-4 border-b text-2xl font-medium">
                      Product Description
                    </h1>
                    <div className="p-6">
                      <p className="text-sm">{crop.description}</p>
                    </div>
                  </div>
               

          

                
                </div>
              </div>
              {/* <!-- product desc wrapper --> */}
            </div>
            {/* <!-- product image & description container --> */}

            
          </main>
        </>
      )}
    </>
  );
};

export default CropDetails;
