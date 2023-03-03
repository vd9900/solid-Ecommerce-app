import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constant/userConstant";

export const userReducer = (state = {}, dispatch) => {
  switch (dispatch.action) {
    case LOGIN_REQUEST:
      return { loading: true, user: {} };
    case LOGIN_SUCCESS:
      return { loading: false, user: action.payload };
    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
