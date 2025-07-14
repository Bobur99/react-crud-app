import { ERROR, LOADING, SUCCESS } from "./fetchType";

export const initialFetchState = {
  loading: false,
  error: "",
  success: false,
};

const fetchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: "",
        success: false,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        success: false,
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        success: true,
      };
    default:
      return state;
  }
};

export default fetchReducer;
