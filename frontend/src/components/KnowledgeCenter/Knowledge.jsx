import { useSnackbar } from 'notistack';
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../actions/wishlistAction';

const Knowledge = ({ _id, name, images, description }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { wishlistItems } = useSelector((state) => state.wishlist);

  const itemInWishlist = wishlistItems.some((i) => i.product === _id);

  const addToWishlistHandler = () => {
    if (itemInWishlist) {
      dispatch(removeFromWishlist(_id));
      enqueueSnackbar('Remove From Wishlist', { variant: 'success' });
    } else {
      dispatch(addToWishlist(_id));
      enqueueSnackbar('Added To Wishlist', { variant: 'success' });
    }
  };

  return (
    <div className="cards">
      {/* <!-- image & product title --> */}
      <div className="flex flex-col items-center text-center group cardin">
        <div>
          <img draggable="false" src={images && images[0].url} alt="" />
        </div>
        <h2>{name.length > 85 ? `${name.substring(0, 85)}...` : name}</h2>
        <p>{description}</p>
      </div>
      <div className="flex flex-col gap-2 items-start"></div>
    </div>
  );
};

export default Knowledge;
