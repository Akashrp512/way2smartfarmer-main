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
  CROP_DETAILS_REQUEST,
  CROP_DETAILS_SUCCESS,
  CROP_DETAILS_FAIL,
  REMOVE_CROP_DETAILS,
  NEW_COMPARISION_REQUEST,
  NEW_COMPARISION_SUCCESS,
  NEW_COMPARISION_FAIL,
  NEW_COMPARISION_RESET,
  NEW_INSIGHTS_REQUEST,
  NEW_INSIGHTS_SUCCESS,
  NEW_INSIGHTS_FAIL,
  NEW_INSIGHTS_RESET,
  ALL_COMPARISION_REQUEST,
  ALL_COMPARISION_SUCCESS,
  ALL_COMPARISION_FAIL,
  COMPARE_DETAILS_REQUEST,
  COMPARE_DETAILS_SUCCESS,
  COMPARE_DETAILS_FAIL,
  INSIGHT_DETAILS_REQUEST,
  INSIGHT_DETAILS_SUCCESS,
  INSIGHT_DETAILS_FAIL,
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

export const comparesReducer = (
  state = { compares: [] },
  { type, payload }
) => {
  switch (type) {
    case ALL_COMPARISION_REQUEST:
      return {
        loading: true,
        compares: [],
      };
    case ALL_COMPARISION_SUCCESS:
      return {
        loading: false,
        compares: payload.compares,
      };

    case ALL_COMPARISION_FAIL:
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

export const cropDetailsReducer = (state = { crop: {} }, { type, payload }) => {
  switch (type) {
    case CROP_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CROP_DETAILS_SUCCESS:
      return {
        loading: false,
        crop: payload,
      };
    case CROP_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case REMOVE_CROP_DETAILS:
      return {
        ...state,
        crop: {},
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

export const compareDetailsReducer = (
  state = { compare: {} },
  { type, payload }
) => {
  switch (type) {
    case COMPARE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMPARE_DETAILS_SUCCESS:
      return {
        loading: false,
        compare: payload,
      };
    case COMPARE_DETAILS_FAIL:
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

export const insightDetailsReducer = (
  state = { insight: {} },
  { type, payload }
) => {
  switch (type) {
    case INSIGHT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case INSIGHT_DETAILS_SUCCESS:
      return {
        loading: false,
        insight: payload,
      };
    case INSIGHT_DETAILS_FAIL:
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

// New Crop Reducer
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
// New Crop Reducer
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

// New Compare Reducer
export const newCompareReducer = (
  state = { compare: {} },
  { type, payload }
) => {
  switch (type) {
    case NEW_COMPARISION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_COMPARISION_SUCCESS:
      return {
        loading: false,
        success: payload.success,
        compare: payload.compare,
      };
    case NEW_COMPARISION_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case NEW_COMPARISION_RESET:
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

// New Insight Reducer
export const newInsightReducer = (
  state = { insight: {} },
  { type, payload }
) => {
  switch (type) {
    case NEW_INSIGHTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_INSIGHTS_SUCCESS:
      return {
        loading: false,
        success: payload.success,
        insight: payload.insight,
      };
    case NEW_INSIGHTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case NEW_INSIGHTS_RESET:
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
