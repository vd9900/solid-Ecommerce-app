import React, { useEffect, useState } from "react";
// import moment from "m";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Navbar from "../components/Navbar";
import Loader from "../components/Loder";
import loadprofile from "../assets/imgs/loadprofile.gif";
import { useFormik } from "formik";
import * as yup from "yup";

import {
  useUpdateUserInfoMutation,
  useUserInfoQuery,
} from "../services/userApi";
import { useAuthUser } from "react-auth-kit";
import { CircularProgress } from "@mui/material";
import { useUploadProfileMutation } from "../services/userApi";
import { BsPlusCircleFill } from "react-icons/bs";
import { addUserImage } from "../services/products/productSlice";
import MyModal from "../components/modals/MyModal";

// user input schmea
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Add new  email"),
  username: yup.string().required("Enter new username"),
});
const Profile = () => {
  // Importing required hooks
  const [toggleEdit, setToggleEdit] = useState(false);
  const auth = useAuthUser();
  const dispatch = useDispatch();

  // fetch user details
  const {
    isLoading,
    data,
    isSuccess,
    refetch,
    isFetching,
    isError,
    error: userInfoDetailError,
  } = useUserInfoQuery(auth().email, {
    refetchOnMountOrArgChange: true,
  });

  // console.log(userInfoDetailError);
  //update user info
  const [
    updateUserInfo,
    {
      data: updatedData,
      error,
      isLoading: updateUserProfileLoading,
      isSuccess: updateUserProfileSuccess,
    },
  ] = useUpdateUserInfoMutation();

  // error handling with  errorboundary
  if (isError) {
    throw new Error(error);
  }

  // update user profile image
  const [
    uploadProfile,
    {
      data: uploadProfileResult,
      isSuccess: uploadProfileSuccess,
      isLoading: isuploadProfileFetching,
    },
  ] = useUploadProfileMutation();

  const userData = data?.message;
  // console.log("fetching", isuploadProfileFetching);
  // input validation
  const formik = useFormik({
    initialValues: { email: "", username: "" },
    validateOnBlur: true,
    onSubmit: (values, action) => {
      updateUserInfo({ username: values.username, email: values.email });
      action.resetForm();
    },
    validationSchema: validationSchema,
  });

  // cancel btn
  const addAgainEditValue = () => {
    setToggleEdit(false);
    formik.resetForm();
  };

  // img convert to base 64 and upload to cloudnary
  const handleUserProfileImg = (e) => {
    // converting to base64
    const read = new FileReader();
    read.readAsDataURL(e.target.files[0]);
    read.onloadend = () => {
      // on Success
      uploadProfile({ image: read.result });
    };
  };

  useEffect(() => {
    updateUserProfileSuccess && setToggleEdit(false);
  }, [updateUserProfileSuccess]);

  // refecth the userprofile again
  useEffect(() => {
    uploadProfileSuccess &&
      refetch() &&
      dispatch(addUserImage(userData?.avatar));
  }, [uploadProfileSuccess, isSuccess]);

  useEffect(() => {
    isSuccess && dispatch(addUserImage(userData?.avatar));
  }, [data]);

  return (
    <div className=" max-w-screen h-screen bg-gray-50">
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative pt-16 sm:w-11/12 md:w-10/12 lg:w-9/12 sm:h-5/6 mx-auto flex justify-center sm:items-center">
          <div className=" sm:relative w-full md:10/12 lg:w-11/12 xl:w-10/12   sm:h-5/6 flex max-sm:flex-col shadow-md bg-white/80 py-4 rounded-md">
            {/* edit toggel component */}
            <MyModal
              isOpen={toggleEdit}
              onClose={() => setToggleEdit(!toggleEdit)}
              className={"z-40"}
            >
              <form
                autoComplete=""
                onSubmit={formik.handleSubmit}
                className={` z-40 shadow-md flex flex-col duration-300  justify-between bg-gray-50 rounded-md py-2 gap-5  w-9/12  h-auto   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
              >
                <div>
                  <div className="border-b py-2">
                    <p className="px-3 font-serif  text-xl">Edit profile</p>
                  </div>
                  <div className="overflow-hidden px-4 flex flex-col gap-3">
                    <div className="p-2">
                      <p className="text-lg py-1">Username</p>
                      <input
                        type="text"
                        className="border bg-gray-100 outline-none py-1 w-full sm:w-6/12 px-3 rounded-sm "
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <p className="text-red-600 text-xs">
                        {formik.touched.username && formik.errors.username
                          ? formik.errors.username
                          : ""}
                      </p>
                    </div>
                    <div className="p-2">
                      <p className="text-lg py-1">Email</p>
                      <input
                        type="text"
                        className="border bg-gray-100 outline-none py-1 w-full sm:w-6/12 px-3 rounded-sm "
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <p className="text-red-600 text-xs">
                        {formik.touched.email && formik.errors.email
                          ? formik.errors.email
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3 px-3">
                  <button
                    // onClick={handleDetailsEdit}
                    className=" disabled:bg-black/90 h-8 bg-black text-white flex gap-2 items-center px-6 rounded-md py-1 "
                    disabled={updateUserProfileLoading}
                    type="submit"
                  >
                    <CircularProgress
                      size={18}
                      className={``}
                      style={{
                        color: "white",
                        display: `${
                          updateUserProfileLoading ? "inline-block" : "none"
                        }`,
                      }}
                    />
                    {updateUserProfileLoading ? null : <span>Edit</span>}
                  </button>
                  <button
                    onClick={addAgainEditValue}
                    className="border border-black  px-8 rounded-md py-1 "
                    type="button"
                  >
                    cancel
                  </button>
                </div>
              </form>
            </MyModal>
            <div className="sm:w-4/12 px-6 flex flex-col  items-center justify-evenly">
              <div className="flex flex-col gap-5 w-full">
                {isuploadProfileFetching ? (
                  <div className="overflow-hidden mx-auto  w-52 h-52 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:h-64 xl:w-64 rounded-full animate-pulse bg-gray-100 flex items-center justify-center">
                    <img src={loadprofile} alt="" className="w-10" />
                  </div>
                ) : (
                  <div className="overflow-hidden mx-auto relative w-52 h-52 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:h-64 xl:w-64 rounded-full">
                    <img
                      src={userData?.avatar?.url}
                      className="mx-auto l object-cover"
                      alt=""
                    />
                    <div className="text-white absolute bottom-0 flex justify-end  bg-black/90   w-64 h-8">
                      <label
                        htmlFor="file-upload"
                        className="custom-file-upload relative cursor-pointer"
                      >
                        <span className="  ">
                          <BsPlusCircleFill
                            // onClick={}
                            fontSize={18}
                            className=" text-white mt-1 mr-28"
                          />
                        </span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          onChange={handleUserProfileImg}
                          className="absolute w-full h-full opacity-0 overflow-hidden cursor-pointer"
                        />
                      </label>
                    </div>
                  </div>
                )}
                <p className="text-3xl py-2 mr-auto">
                  {" "}
                  {data?.message?.username}
                </p>
              </div>
              <button
                onClick={() => setToggleEdit(true)}
                className="py-1 max-sm:w-5/12 max-sm:ml-auto hover:text-white hover:bg-black duration-700 rounded-md font-medium w-full border border-black "
              >
                Edit profile
              </button>
            </div>
            <div className="sm:w-8/12 md:pl-5 flex flex-col   ">
              <div className="flex gap-4 py-2   px-10 border-b-2 border-r-gray-500">
                <span className="hidden sm:block cursor-pointer px-2 p font-medium border-b-4 border-gray-600 text-black/70 text-sm ">
                  About
                </span>
                {/* <span className="cursor-pointer font-medium px-2 pb-1 text-black/70 text-sm rounded-md">
                Order Details
              </span> */}
              </div>
              <div className="flex sm:h-5/6 p-4  flex-col justify-around gap-2 ">
                <div className="border rounded-md p-4 flex flex-col gap-2 ">
                  <p className="text-gray-500 border-b-2 font-medium w-fit">
                    Personal Details
                  </p>
                  <span className="">
                    <p className="text-sm  text-gray-700">username</p>
                    <p className="p-0 m-0 leading-4 font-medium  text-gray-800">
                      {/* name */}
                      {data?.message?.username}
                    </p>
                  </span>
                  <span className="">
                    <p className="text-sm  text-gray-700">email</p>
                    <p className="p-0 m-0 leading-4 font-medium  text-gray-800">
                      {/* email */}
                      {data?.message?.email}
                    </p>
                  </span>
                </div>
                <div className="border rounded-md p-4 flex flex-col gap-2 ">
                  <p className="text-gray-500 border-b-2 font-medium w-fit">
                    Histroy
                  </p>
                  <span className="">
                    <p className="text-sm p-0 text-gray-700">Last updated</p>
                    <p className="p-0 m-0 leading-4 font-medium font-mono text-gray-800">
                      {moment(data?.message?.updatedAt).format(
                        "DD MMM YYYY h:mma"
                      )}
                    </p>
                  </span>
                  <span className="">
                    <p className="text-sm p-0 text-gray-700">joined</p>
                    <p className="p-0 m-0 leading-4 font-medium font-mono text-gray-800">
                      {moment(data?.message?.createdAt).format(
                        "DD MMMM YYYYY h:mma"
                      )}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
