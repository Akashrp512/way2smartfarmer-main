//New Crop --Admin

import axios from "axios";
import {
  ADMIN_CROPS_FAIL,
  ADMIN_CROPS_REQUEST,
  ADMIN_CROPS_SUCCESS,
  ALL_CROPS_FAIL,
  ALL_CROPS_REQUEST,
  ALL_CROPS_SUCCESS,
  DELETE_CROP_FAIL,
  DELETE_CROP_REQUEST,
  DELETE_CROP_SUCCESS,
  NEW_CROP_FAIL,
  NEW_CROP_REQUEST,
  NEW_CROP_SUCCESS,
} from "../constants/productConstants";

// Get All Products --- Filter/Search/Sort
export const getCrops =
  (keyword = "", category, price = [0, 300000], ratings = 0, currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_CROPS_REQUEST });

      let url = `/api/v1/crops`;

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
