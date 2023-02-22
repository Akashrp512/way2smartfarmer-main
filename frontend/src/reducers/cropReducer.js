import {
  ADMIN_CROPS_FAIL,
  ADMIN_CROPS_REQUEST,
  ADMIN_CROPS_SUCCESS,
  ALL_CROPS_FAIL,
  ALL_CROPS_REQUEST,
  ALL_CROPS_SUCCESS,
  CLEAR_ERRORS,
  NEW_CROP_FAIL,
  NEW_CROP_REQUEST,
  NEW_CROP_RESET,
  NEW_CROP_SUCCESS,
} from "../constants/productConstants";

export const cropsReducer = (state = { crops: [] }, { type, payload }) => {
  switch (type) {
    case ALL_CROPS_REQUEST:
    case ADMIN_CROPS_REQUEST:
      return {
        loading: true,
        crops: [],
      };
    case ALL_CROPS_SUCCESS:
      return {
        loading: false,
        crops: payload.products,
      };
    case ADMIN_CROPS_SUCCESS:
      return {
        loading: false,
        crops: payload,
      };
    case ALL_CROPS_FAIL:
    case ADMIN_CROPS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
// New Product Reducer
export const newCropReducer = (state = { crop: {} }, { type, payload }) => {
  switch (type) {
    case NEW_CROP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CROP_SUCCESS:
      return {
        loading: false,
        success: payload.success,
        crop: payload.crop,
      };
    case NEW_CROP_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case NEW_CROP_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
