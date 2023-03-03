import axios from "axios";
import { LOGIN_FAIL } from "../constant/userConstant";

export const loginUser = (user) => async (dispacth) => {
  try {
    const userData = await axios.post("/api/vi/login", user);
  } catch (error) {
    dispacth({ type: LOGIN_FAIL, payload: error });
  }
};
