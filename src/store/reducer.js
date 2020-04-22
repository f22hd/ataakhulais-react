import { SET_LOADING } from "./actionTypes";

const initialState = { isLoading: false };

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload.isLoading;
    default:
      return state;
  }
};

export default LoadingReducer;
