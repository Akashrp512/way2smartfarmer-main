import {
  ALL_KNOWLEDGES_FAIL,
  ALL_KNOWLEDGES_REQUEST,
  ALL_KNOWLEDGES_SUCCESS,
  NEW_KNOWLEDGE_FAIL,
  NEW_KNOWLEDGE_REQUEST,
  NEW_KNOWLEDGE_SUCCESS,
  CLEAR_ERRORS,
  NEW_KNOWLEDGE_RESET,
} from "../constants/knowledgeConstants";

export const knowledgesReducer = (
  state = { knowledges: [] },
  { type, payload }
) => {
  switch (type) {
    case ALL_KNOWLEDGES_REQUEST:
      return {
        loading: true,
        knowledges: [],
      };
    case ALL_KNOWLEDGES_SUCCESS:
      return {
        loading: false,
        knowledges: payload.knowledges,
      };

    case ALL_KNOWLEDGES_FAIL:
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

// New Knowledge Reducer
export const newKnowledgeReducer = (
  state = { knowledge: {} },
  { type, payload }
) => {
  switch (type) {
    case NEW_KNOWLEDGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_KNOWLEDGE_SUCCESS:
      return {
        loading: false,
        success: payload.success,
        knowledge: payload.knowledge,
      };
    case NEW_KNOWLEDGE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case NEW_KNOWLEDGE_RESET:
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
