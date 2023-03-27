import React from "react";
import MyModal from "../modals/MyModal";

const EditProfile = () => {
  return (
    <>
      <MyModal>
        <form
          autoComplete=""
          onSubmit={formik.handleSubmit}
          className={`${
            toggleEdit ? "flex" : "hidden"
          } z-40 shadow-md flex flex-col duration-300  justify-between bg-gray-50 rounded-md py-2 gap-5  w-9/12  h-auto   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
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
                <p className="text-red-600 text-sm">
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
                <p className="text-red-600 text-sm">
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
    </>
  );
};

export default EditProfile;
