import axios from "axios";
import {
  FAIL_USER_DETAIL,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REQUEST_USER_DETAIL,
  SUCCESS_USER_DETAIL,
} from "../constant/userConstant";

export const loginUser = (user) => async (dispacth) => {
  try {
    dispacth({ type: LOGIN_REQUEST });
    const { data } = await axios.post("/api/vi/login", user);
    console.log(data);
    data.sucess && dispacth({ type: LOGIN_SUCCESS, payload: data });
    data.error && dispacth({ type: LOGIN_FAIL, payload: data.error });
  } catch (error) {
    dispacth({ type: LOGIN_FAIL, payload: error });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const url = "/api/vi/logout";
    dispatch({ type: LOGOUT_REQUEST });
    const { data } = axios.get(url);
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error });
  }
};

export const getUserDetails = () => async (dispatch) => {
  const url = "/api/vi/me";
  try {
    dispatch({ type: REQUEST_USER_DETAIL });
    const { data } = await axios.get(url);
    console.log(data);
    dispatch({ type: SUCCESS_USER_DETAIL, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_USER_DETAIL, payload: error });
  }
};
