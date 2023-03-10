import { useFormik } from "formik";
import React from "react";
import { useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

import { BiLock } from "react-icons/bi";

// input schema validation with YUP

const validationSchema = yup.object({
  password: yup
    .string()
    .min(8, "Your password is too short.")
    .required("password is required"),
  confirmpassword: yup
    .string()
    .required("enter the password again")
    .matches([yup.ref("password"), null], "Passwords must match"),
});

const CreatePassword = () => {
  const SignIn = useSignIn();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  return (
    <div className="w-10/12  mx-auto flex flex-col gap-14">
      <div className="flex flex-col  gap-1">
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
          <p className="text-red-600 text-sm">
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
              placeholder="enter the password again"
              className="outline-none w-full bg-transparent"
            />
          </div>
          <p className="text-red-600 text-sm">
            {formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ""}
          </p>
        </div>
        <button
          type="submit"
          className="font-sans text-lg shadow-md bg-slate-800 text-white cursor-pointer rounded-md   w-full py-2  font-bold border-black"
        >
          Next
        </button>
      </form>
      <div className="text-center">
        <p className="py-2 text-gray-600">Have not account yet?</p>
        <Link to={"/SignUp"} className="font-semibold cursor-pointer underline">
          SIGNUP
        </Link>
      </div>
    </div>
  );
};

export default CreatePassword;
