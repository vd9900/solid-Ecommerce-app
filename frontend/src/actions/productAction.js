import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  ALL_ERROR_CLEAR,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
} from "../constant/productConstant";

export const getProducts =
  (s = "", page = 1, price = [0, 10000]) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      // console.log(page);
      const { data } = await axios.get(
        `/api/vi/products?s=${s}&page=${page}&price[gte]=${price[0]}&price[lte]=${price[1]}`
      );
      console.log(page);
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:5000/api/vi/product/?id=${id}`
    );
    // console.log(data);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error,
    });
  }
};

export const clearError = () => (dispatch) => {
  dispatch({
    type: ALL_ERROR_CLEAR,
  });
};
