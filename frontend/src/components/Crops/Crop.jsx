import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { getDiscount } from '../../utils/functions';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../actions/wishlistAction';
import { useSnackbar } from 'notistack';

const Crop = ({
  _id,
  name,
  images,

}) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();




  return (
    <div className="flex flex-col items-start gap-2 px-4 py-6 relative hover:shadow-lg rounded-sm">
      {/* <!-- image & product title --> */}
      <Link
        to={`/crop/${_id}`}
        className="flex flex-col items-center text-center group"
      >
        <div className="w-44 h-48">
          <img
            draggable="false"
            className="w-full h-full object-contain"
            src={images && images[0].url}
            alt=""
          />
        </div>
        <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left">
          {name.length > 85 ? `${name.substring(0, 85)}...` : name}
        </h2>
      </Link>
     {/* <!-- image & product title --> */}
      {/* <!-- product description --> */}
      <div className="flex flex-col gap-2 items-start">
        {/* <!-- rating badge --> */}
       
        {/* <!-- rating badge --> */}

        
      </div>
      
    </div>
  );
};

export default Crop;
