//New Crop --Admin

import axios from "axios";

import {
  ALL_KNOWLEDGES_FAIL,
  ALL_KNOWLEDGES_REQUEST,
  ALL_KNOWLEDGES_SUCCESS,
  NEW_KNOWLEDGE_FAIL,
  NEW_KNOWLEDGE_REQUEST,
  NEW_KNOWLEDGE_SUCCESS,
} from "../constants/knowledgeConstants";

// Get All Crops --- Filter/Search/Sort
export const getKnowledges =
  (keyword = "", category, price = [0, 300000], ratings = 0, currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_KNOWLEDGES_REQUEST });

      let url = `/api/v1/knowledges?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
      if (category) {
        url = `/api/v1/knowledges?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
      }

      const { data } = await axios.get(url);

      dispatch({
        type: ALL_KNOWLEDGES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_KNOWLEDGES_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//NEW KNOWLEDGE --ADMIN
export const createKnowledge = (knowledgeData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_KNOWLEDGE_REQUEST });
    const config = { header: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/v1/admin/knowledge/new",
      knowledgeData,
      config
    );

    dispatch({
      type: NEW_KNOWLEDGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_KNOWLEDGE_FAIL,
      payload: error.response.data.message,
    });
  }
};
