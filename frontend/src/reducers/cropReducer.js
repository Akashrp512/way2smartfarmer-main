import {
  ADMIN_CROPS_FAIL,
  ADMIN_CROPS_REQUEST,
  ADMIN_CROPS_SUCCESS,
  ALL_CROPS_FAIL,
  ALL_CROPS_REQUEST,
  ALL_CROPS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_CROP_FAIL,
  DELETE_CROP_REQUEST,
  DELETE_CROP_RESET,
  DELETE_CROP_SUCCESS,
  NEW_CROP_FAIL,
  NEW_CROP_REQUEST,
  NEW_CROP_RESET,
  NEW_CROP_SUCCESS,
  UPDATE_CROP_FAIL,
  UPDATE_CROP_REQUEST,
  UPDATE_CROP_RESET,
  UPDATE_CROP_SUCCESS,
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
        crops: payload.crops,
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
export const cropReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_CROP_REQUEST:
    case DELETE_CROP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_CROP_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: payload,
      };
    case DELETE_CROP_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: payload,
      };
    case UPDATE_CROP_FAIL:
    case DELETE_CROP_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case UPDATE_CROP_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case DELETE_CROP_RESET:
      return {
        ...state,
        isDeleted: false,
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
