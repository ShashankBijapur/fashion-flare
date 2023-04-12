import axios from "axios";
import {
  GET_REQUEST_USER,
  GET_REQUEST_FAILURE_USER,
  GET_REQUEST_SUCCESS_USER,
  DELETE_USER_DATA,
} from "./action.Type";

export const getUser = () => {
  return {
    type: GET_REQUEST_USER,
  };
};

export const getUserSuccess = (payload) => {
  return {
    type: GET_REQUEST_SUCCESS_USER,
    payload,
  };
};

export const getUserFailure = () => {
  return {
    type: GET_REQUEST_FAILURE_USER,
  };
};

export const deletUserData = () => {
  return {
    type: DELETE_USER_DATA,
  };
};

export const getUSerData = () => (dispatch) => {
  dispatch(getUser());
  axios
    .get("http://localhost:4000/auth")
    .then((res) => {
      dispatch(getUserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getUserFailure());
    });
};

export const deleteUserData = (id) => async (dispatch) => {
  dispatch(getUser());
  return axios
    .delete(`http://localhost:4000/auth/delete${id}`)
    .then((res) => {
      dispatch(deletUserData());
    })
    .catch((err) => {
      dispatch(getUserFailure());
    });
};