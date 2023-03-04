import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { BiLock } from "react-icons/bi";

//components
import Loader from "../components/Loder";

// for form
import * as yup from "yup";
import { useFormik } from "formik";

// from redux
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
import { useSignIn } from "react-auth-kit";
import axios from "axios";

// input schema validation with YUP

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "password must be more than 8")
    .required("Enter a your password"),
});

const Login = () => {
  const SignIn = useSignIn();
  const navigate = useNavigate();
  // handle submit
  const dispatch = useDispatch();
  const { loading, error, user, isAuth } = useSelector(
    (state) => state.userInfo
  );

  const onSubmit = async (values) => {
    try {
      const { data } = await axios.post("/api/vi/login", values);
      console.log(data);
      if (data.sucess) {
        SignIn({
          token: data.token,
          expiresIn: 5 * 24 * 60 * 60 * 10000,
          authState: { email: data.user.email },
          tokenType: "Bearer",
        });
      }
      data.sucess && navigate("/home");
      // data.error && alert(data.error);
    } catch (error) {
      console.log(error);
    }

    console.log(user.token);
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  // console.log(formik);

  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center items-center ">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full md:w-5/12 rounded-md lg:w-4/12 xl:w-3/12 shadow-lg bg-white border border-gray-200 h-full sm:h-5/6  flex flex-col justify-around">
          <div className="w-10/12    mx-auto flex flex-col gap-10">
            <p className="text-3xl font-medium text-gray-800 font-serif mx-auto">
              SignIn
            </p>
            <form action="" onSubmit={formik.handleSubmit}>
              <div>
                <p className="font-semibold text-gray-600">Email</p>
                <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
                  <span>
                    <CgProfile className="text-gray-500" />
                  </span>
                  <input
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Type your email"
                    className="outline-none w-full bg-transparent"
                  />
                </div>
                <p className="text-red-600 text-sm">
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""}
                  {error?.email}
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Password</p>
                <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
                  <span>
                    <BiLock className="text-gray-500" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    placeholder="Type your password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    className="outline-none w-full"
                  />
                </div>
                <p className="text-red-600 text-sm">
                  {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ""}
                  {error?.password}
                </p>
                <div className="py-1 text-gray-600 text-right text-sm">
                  <p>Forgot password?</p>
                </div>
              </div>
              <button
                type="submit"
                className="font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer rounded-md text-white hover:bg-black w-full py-2  font-bold border-black"
              >
                Login
              </button>
            </form>
          </div>
          <div className="text-center">
            <p className="py-2 text-gray-600">Have not account yet?</p>
            <Link
              to={"/SignUp"}
              className="font-semibold cursor-pointer underline"
            >
              SIGNUP
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
