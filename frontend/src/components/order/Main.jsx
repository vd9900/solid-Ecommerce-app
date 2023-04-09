import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdOutlinePlace } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Payment from "./Payment";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserAddress } from "../../services/products/productSlice";

const validationSchema = yup.object({
  fullname: yup.string().required("fullname is required"),
  address: yup
    .string()
    .min(20, "Enter valid address")
    .required("address is required"),
  city: yup.string().required("city is required"),
  country: yup.string().required("country is required"),
});

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   UserAddress();
  const formik = useFormik({
    initialValues: { fullname: "", address: "", city: "", country: "" },
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
      dispatch(UserAddress(values));
      navigate("/payment");
    },
    validationSchema: validationSchema,
  });
  return (
    <div className="flex  flex-col md:flex-row  gap-2">
      <div className=" md:w-10/12 h-auto bg-white px-5 py-2 rounded-md">
        <p className="text-3xl font-serif font-medium">Shipping Address</p>
        <div className="">
          <form
            onSubmit={formik.handleSubmit}
            action=""
            className="flex flex-col gap-4 py-2 overflow-hidden  "
            //   onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-gray-800">Name</p>
              <div className="sm:w-7/12 flex items-center gap-2 p-2 rounded-md  border-b   focus-within:border bg-gray-100  focus-within:border-black/60 duration-200">
                <span>
                  <CgProfile className="text-gray-500" />
                </span>
                <input
                  type="text"
                  name="fullname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullname}
                  // value={formik.values.email}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  placeholder="Enter your fullname"
                  className="outline-none w-full bg-transparent"
                />
              </div>
              <p className="text-red-600 text-xs">
                {formik.touched.fullname && formik.errors.fullname
                  ? formik.errors.fullname
                  : ""}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-gray-800">Address</p>
              <div className="sm:w-7/12 flex resize-none  gap-2 p-2 rounded-md    focus-within:border bg-gray-100  focus-within:border-black/60 duration-200">
                <span className="inline-block pt-1">
                  <HiOutlineMapPin className="text-gray-500" />
                </span>
                <div className="w-full">
                  <textarea
                    rows={3}
                    type="text"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    placeholder="Street address, P.O box, company name, c/o"
                    className="outline-none resize-none w-full bg-transparent"
                  />
                </div>
              </div>
              <p className="text-red-600 text-xs">
                {formik.touched.address && formik.errors.address
                  ? formik.errors.address
                  : ""}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-gray-800">City</p>
              <div className="sm:w-7/12 flex items-center gap-2 p-2 rounded-md     focus-within:border bg-gray-100  focus-within:border-black/60 duration-200">
                <span>
                  <RiHotelLine className="text-gray-500" />
                </span>
                <input
                  type="text"
                  name="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  className="outline-none w-full bg-transparent"
                  placeholder="City"
                />
              </div>
              <p className="text-red-600 text-xs">
                {formik.touched.city && formik.errors.city
                  ? formik.errors.city
                  : ""}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-gray-800">Country</p>
              <div className="sm:w-7/12 flex items-center gap-2 p-2 rounded-md     focus-within:border bg-gray-100  focus-within:border-black/60 duration-200">
                <span>
                  <MdOutlinePlace className="text-gray-500" />
                </span>
                <input
                  type="text"
                  name="country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  className="outline-none w-full bg-transparent"
                  placeholder="Country"
                />
              </div>
              <p className="text-red-600 text-xs">
                {formik.touched.country && formik.errors.country
                  ? formik.errors.country
                  : ""}
              </p>
              {/* <p className="text-red-600 text-sm">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </p> */}
            </div>

            <div className="max-sm:pt-4 flex items-center  gap-3 px-3">
              <Link
                to={"/"}
                className="bg-black/80  text-white px-8 rounded-full py-2
            transition duration-200 transform active:scale-95 ease-in-out
             "
                type="button"
              >
                cancel
              </Link>
              <button
                className="bg-black  text-white px-10 rounded-full py-2
            transition duration-200 transform active:scale-95 ease-in-out
             "
                type="submit"
              >
                Done
              </button>
            </div>
          </form>
        </div>
        {/* for small devices */}
      </div>
    </div>
  );
};

export default Main;
