import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

import { BiLock } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useCreatePasswordMutation } from "../../../services/updatePassword/forgotPasswordApi";
import loaderGif from "../../../assets/imgs/loadprofile.gif";

// input schema validation with YUP

const validationSchema = yup.object({
  password: yup
    .string()
    .min(8, "Your password is too short.")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm new password"),
  // .([yup.ref("password"), null], "Passwords must match"),
});

const CreatePassword = () => {
  const SignIn = useSignIn();
  const navigate = useNavigate();
  const { UserEmail: email } = useSelector((state) => state.productsStore);

  const [createPassword, { error, data, isLoading, isError, isSuccess }] =
    useCreatePasswordMutation();
  const onSubmit = async (values) => {
    // alert(JSON.stringify(values));
    const userInfo = {
      email,
      password: values.confirmPassword,
    };
    createPassword(userInfo);
  };
  console.log("succes", data);
  console.log("error", error);

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  useEffect(() => {
    if (isError || error) {
      formik.setErrors({
        password: error?.data.data || "Something went wrong, Try again later",
      });
    }
    if (isSuccess) {
      navigate("/login");
    }
  }, [isError, isSuccess]);
  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center items-center overflow-hidden">
      <div className=" w-full md:w-5/12 rounded-md lg:w-4/12 xl:w-3/12 shadow-lg bg-white border border-gray-200 h-full sm:h-5/6  flex flex-col justify-around">
        <div className="w-10/12  mx-auto flex flex-col gap-14">
          <div className="flex flex-col  gap-1  ">
            <div className=" mx-auto">
              <p className="text-2xl font-medium text-gray-800 font-serif mx-auto">
                Confirm password
              </p>
            </div>
          </div>
          <form
            action=""
            className="flex flex-col gap-14"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <p className="font-semibold text-gray-700">Password</p>
              <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
                <span>
                  <BiLock className="text-gray-500" />
                </span>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Create strong password"
                  className="outline-none w-full bg-transparent"
                />
              </div>
              <p className="text-red-600 text-xs h-4">
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Confirm Password</p>
              <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
                <span>
                  <BiLock className="text-gray-500" />
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter the password again"
                  className="outline-none w-full bg-transparent"
                />
              </div>
              <p className="text-red-600 text-xs h-4">
                {formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : ""}
              </p>
            </div>
            <button
              type="submit"
              className=" 
              font-serif  bg-black text-white
               cursor-pointer rounded-full font-medium
                w-11/12 mx-auto py-2  border-black
                transition duration-200 transform active:scale-95 ease-in-out"
            >
              {isLoading ? (
                <span>
                  <img
                    src={loaderGif}
                    alt="load"
                    className="w-6 filter brightness-0 invert  mx-auto h-6"
                  />
                </span>
              ) : (
                <span>Confirm</span>
              )}
            </button>
          </form>
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
      </div>
    </div>
  );
};

export default CreatePassword;
