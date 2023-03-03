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

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true, isAuth: false, user: {} };
    case LOGIN_SUCCESS:
      return { loading: false, isAuth: true, user: action.payload };
    case LOGIN_FAIL:
      return { loading: false, isAuth: false, error: action.payload };
    case REQUEST_USER_DETAIL:
      return { loading: true, isAuth: true };
    case SUCCESS_USER_DETAIL:
      return { loading: false, isAuth: true, userDeatis: action.payload };
    case FAIL_USER_DETAIL:
      return { loading: false, error: action.payload };
    case LOGOUT_REQUEST:
      return { loading: true };
    case LOGOUT_SUCCESS:
      return { loading: false, isAuth: false, user: {} };
    case LOGOUT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
