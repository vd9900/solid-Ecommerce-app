import React from "react";
import { BiLock } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import Avatar from "@mui/material/Avatar";
// import add from "..../";

const AddInfo = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="font-semibold text-gray-600">Username</p>
        <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
          <span>
            <CgProfile className="text-gray-500" />
          </span>
          <input
            type="text"
            placeholder="Create a username"
            className="outline-none"
          />
        </div>
      </div>

      <div>
        <p className="font-semibold text-gray-600">Password</p>
        <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
          <span>
            <BiLock className="text-gray-500" />
          </span>
          <input
            type="password"
            placeholder="Create a strong password"
            className="outline-none w-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <Avatar
            alt="Remy Sharp"
            src="https://yt3.ggpht.com/b42QCAmVJ0kzNNi10_HmhsdfPEATQATS80hbLyHVJcVm6drn5pKtC6MY6wTluXi5iZ8_is5Q_Q=s88-c-k-c0x00ffffff-no-rj"
          />
        </div>
        <input type="file" accept="image/*" name="avatar" />
      </div>
    </div>
  );
};

export default AddInfo;
