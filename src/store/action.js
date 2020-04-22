import { SET_LOADING } from "./actionTypes";

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: { isLoading },
  };
};
