import { optionGroupUnstyledClasses } from "@mui/base";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useCheckOTPMutation,
  useSendEmailMutation,
} from "../../../services/updatePassword/forgotPasswordApi";
import loaderGif from "../../../assets/imgs/loadprofile.gif";

//components
// import Loader from "../../components/Loder";

const Enterotp = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const navigate = useNavigate();
  const [timerCount, setTimer] = useState(10);
  const [OTPinput, setOTPinput] = useState([]);
  const [disable, setDisable] = useState(true);
  const [isInputField, setIsInputField] = useState(true);
  const [error, SetError] = useState("");

  const handleInputOtp = (e, inputRef) => {
    SetError("");
    const input = e.target;
    if (input.value.length >= 1) {
      e.target.value.slice(0, 1);
      inputRef.current.focus();
    }
  };

  //geting user email address
  const { UserEmail: email } = useSelector((state) => state.productsStore);
  console.log(email);

  const [
    sendEmail,
    { isSuccess: isSuccessRestEmail, error: errorRestEmail, data: emailData },
  ] = useSendEmailMutation();
  console.log("reset error", errorRestEmail);
  console.log("Success", emailData);
  // const [sendEmail, { isSuccess, isError, error, data: emailData }] =
  //   useSendEmailMutation();
  const [
    checkOTP,
    { error: CheckOtpError, data: otpResult, isSuccess, isLoading, isError },
  ] = useCheckOTPMutation();

  if (otpResult?.success) {
    navigate("/forgot_password/newPassword");
  }

  function resendOTP() {
    if (disable) return;
    sendEmail(email);
    setDisable(true);
    setTimer(20);
  }
  function verfiyOTP(e) {
    e.preventDefault();
    const otp = OTPinput.join(""); // join OTPinput array into a string
    const isEmpty = otp === ""; // check if otp is empty
    const isInvalidLength = otp.length !== 4; // check if otp is not 4 digits long
    isInvalidLength && SetError("Please fill the input");
    const convertToNumber = Number(otp); // convert otp string to number
    console.log(convertToNumber);
    if (!isEmpty && !isInvalidLength) {
      checkOTP(convertToNumber);
    }
  }
  // to reset the resend otp option
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, [disable]);

  useEffect(() => {
    if (isSuccess?.success) {
      navigate("/forgot_password/newPassword");
    }
    if (otpResult?.error) {
      SetError(otpResult?.error);
    }
  }, [isSuccess, otpResult]);

  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center items-center ">
      <div className=" w-full md:w-5/12 rounded-md lg:w-4/12 xl:w-3/12 shadow-lg bg-white border border-gray-200 h-full sm:h-5/6  flex flex-col justify-around">
        <div className=" px-6 pt-10 pb-9  mx-auto w-full">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-serif text-gray-900 font-medium text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-center text-gray-400">
                <p>We have sent a code to your email {email}</p>
              </div>
            </div>

            <div>
              <form>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-16 h-16 ">
                      <input
                        maxLength="1"
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-gray-200 text-2xl bg-white focus:bg-gray-50 focus:ring-2 ring-black"
                        type="number"
                        onInput={(e) => handleInputOtp(e, inputRef2)}
                        ref={inputRef1}
                        name=""
                        id=""
                        onChange={(e) => {
                          setOTPinput([
                            e.target.value,
                            OTPinput[1],
                            OTPinput[2],
                            OTPinput[3],
                          ]);
                        }}
                      ></input>
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        maxLength="1"
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-gray-200 text-2xl bg-white focus:bg-gray-50 focus:ring-2 ring-black"
                        type="number"
                        onInput={(e) => handleInputOtp(e, inputRef3)}
                        ref={inputRef2}
                        name=""
                        id=""
                        onChange={(e) =>
                          setOTPinput([
                            OTPinput[0],
                            e.target.value,
                            OTPinput[2],
                            OTPinput[3],
                          ])
                        }
                      ></input>
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        maxLength="1"
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-gray-200 text-2xl bg-white focus:bg-gray-50 focus:ring-2 ring-black"
                        type="number"
                        onInput={(e) => handleInputOtp(e, inputRef4)}
                        ref={inputRef3}
                        name=""
                        id=""
                        onChange={(e) =>
                          setOTPinput([
                            OTPinput[0],
                            OTPinput[1],
                            e.target.value,
                            OTPinput[3],
                          ])
                        }
                      ></input>
                    </div>
                    <div className="w-16 h-16">
                      <input
                        maxLength="1"
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-gray-200 text-2xl bg-white focus:bg-gray-50 focus:ring-2 ring-black"
                        type="number"
                        ref={inputRef4}
                        name=""
                        id=""
                        onChange={(e) =>
                          setOTPinput([
                            OTPinput[0],
                            OTPinput[1],
                            OTPinput[2],
                            e.target.value,
                          ])
                        }
                      ></input>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-5">
                    <div className="text-center">
                      <p className="text-red-700 text-xs h-4">
                        {error && error}
                      </p>
                    </div>
                    <div className="text-center">
                      <button
                        onClick={(e) => verfiyOTP(e)}
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
                          <span>Verify OTP</span>
                        )}
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <a
                        className={`${
                          disable
                            ? "cursor-none text-gray-600"
                            : "cursor-pointer text-black  font-bold"
                        }flex flex-row items-center`}
                        onClick={() => resendOTP()}
                      >
                        {disable
                          ? `Resend OTP in ${timerCount}s`
                          : "Resend OTP"}
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterotp;
