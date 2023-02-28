//New Crop --Admin

import axios from "axios";
import {
  ADMIN_CROPS_FAIL,
  ADMIN_CROPS_REQUEST,
  ADMIN_CROPS_SUCCESS,
  ALL_COMPARISION_FAIL,
  ALL_COMPARISION_REQUEST,
  ALL_COMPARISION_SUCCESS,
  ALL_CROPS_FAIL,
  ALL_CROPS_REQUEST,
  ALL_CROPS_SUCCESS,
  ALL_INSIGHTS_FAIL,
  ALL_INSIGHTS_REQUEST,
  ALL_INSIGHTS_SUCCESS,
  COMPARE_DETAILS_FAIL,
  COMPARE_DETAILS_REQUEST,
  COMPARE_DETAILS_SUCCESS,
  CROP_DETAILS_FAIL,
  CROP_DETAILS_REQUEST,
  CROP_DETAILS_SUCCESS,
  DELETE_CROP_FAIL,
  DELETE_CROP_REQUEST,
  DELETE_CROP_SUCCESS,
  INSIGHT_DETAILS_FAIL,
  INSIGHT_DETAILS_REQUEST,
  INSIGHT_DETAILS_SUCCESS,
  NEW_COMPARISION_FAIL,
  NEW_COMPARISION_REQUEST,
  NEW_COMPARISION_SUCCESS,
  NEW_CROP_FAIL,
  NEW_CROP_REQUEST,
  NEW_CROP_SUCCESS,
  NEW_INSIGHTS_FAIL,
  NEW_INSIGHTS_REQUEST,
  NEW_INSIGHTS_SUCCESS,
} from "../constants/productConstants";

// Get All Crops --- Filter/Search/Sort
export const getCrops =
  (keyword = "", category, price = [0, 300000], ratings = 0, currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_CROPS_REQUEST });

      let url = `/api/v1/crops?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
      if (category) {
        url = `/api/v1/crops?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
      }

      const { data } = await axios.get(url);

      dispatch({
        type: ALL_CROPS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_CROPS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All COMPARISION --- Filter/Search/Sort
export const getComparisions =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_COMPARISION_REQUEST });

      let url = `/api/v1/compares?keyword=${keyword}`;

      const { data } = await axios.get(url);

      dispatch({
        type: ALL_COMPARISION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_COMPARISION_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All INSIGHT --- Filter/Search/Sort
export const getInsights =
  (keyword = "", category, price = [0, 300000], ratings = 0, currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_INSIGHTS_REQUEST });

      let url = `/api/v1/insights?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
      if (category) {
        url = `/api/v1/insights?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
      }

      const { data } = await axios.get(url);

      dispatch({
        type: ALL_INSIGHTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_INSIGHTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//NEW CROP --ADMIN
export const createCrop = (cropData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CROP_REQUEST });
    const config = { header: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/v1/admin/crop/new",
      cropData,
      config
    );

    dispatch({
      type: NEW_CROP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CROP_FAIL,
      payload: error.response.data.message,
    });
  }
};

//NEW CROP COMPARISION--ADMIN
export const createComparision = (compareData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_COMPARISION_REQUEST });
    const config = { header: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/v1/admin/compare/new",
      compareData,
      config
    );

    dispatch({
      type: NEW_COMPARISION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_COMPARISION_FAIL,
      payload: error.response.data.message,
    });
  }
};

//NEW CROP INSIGHTS --ADMIN
export const createInsights = (insightData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_INSIGHTS_REQUEST });
    const config = { header: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/v1/admin/insight/new",
      insightData,
      config
    );

    dispatch({
      type: NEW_INSIGHTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_INSIGHTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Products ---ADMIN
export const getAdminCrops = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_CROPS_REQUEST });

    const { data } = await axios.get("/api/v1/admin/crops");

    dispatch({
      type: ADMIN_CROPS_SUCCESS,
      payload: data.crops,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_CROPS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Crop Details
export const getCropDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CROP_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/crop/${id}`);

    dispatch({
      type: CROP_DETAILS_SUCCESS,
      payload: data.crop,
    });
  } catch (error) {
    dispatch({
      type: CROP_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Compare Details
export const getCompareDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: COMPARE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/compare/${id}`);

    dispatch({
      type: COMPARE_DETAILS_SUCCESS,
      payload: data.compare,
    });
  } catch (error) {
    dispatch({
      type: COMPARE_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Crop Details
export const getInsightDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: INSIGHT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/insight/${id}`);

    dispatch({
      type: INSIGHT_DETAILS_SUCCESS,
      payload: data.insight,
    });
  } catch (error) {
    dispatch({
      type: INSIGHT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Crop ---ADMIN
export const deleteCrop = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CROP_REQUEST });
    const { data } = await axios.delete(`/api/v1/admin/crop/${id}`);

    dispatch({
      type: DELETE_CROP_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CROP_FAIL,
      payload: error.response.data.message,
    });
  }
};
