import React from "react";

const Enterotp = () => {
  return (
    <div className="flex justify-center items-center  h-full">
      <div className=" px-6 pt-10 pb-9  mx-auto w-full">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-serif text-gray-900 font-medium text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email</p>
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
                      type="text"
                      name=""
                      id=""
                      //   onChange={(e) =>
                      //     setOTPinput([
                      //       e.target.value,
                      //       OTPinput[1],
                      //       OTPinput[2],
                      //       OTPinput[3],
                      //     ])
                      //   }
                    ></input>
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-gray-200 text-2xl bg-white focus:bg-gray-50 focus:ring-2 ring-black"
                      type="text"
                      name=""
                      id=""
                      //   onChange={(e) =>
                      //     setOTPinput([
                      //       OTPinput[0],
                      //       e.target.value,
                      //       OTPinput[2],
                      //       OTPinput[3],
                      //     ])
                      //   }
                    ></input>
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-gray-200 text-2xl bg-white focus:bg-gray-50 focus:ring-2 ring-black"
                      type="text"
                      name=""
                      id=""
                      //   onChange={(e) =>
                      //     setOTPinput([
                      //       OTPinput[0],
                      //       OTPinput[1],
                      //       e.target.value,
                      //       OTPinput[3],
                      //     ])
                      //   }
                    ></input>
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-gray-200 text-2xl bg-white focus:bg-gray-50 focus:ring-2 ring-black"
                      type="text"
                      name=""
                      id=""
                      //   onChange={(e) =>
                      //     setOTPinput([
                      //       OTPinput[0],
                      //       OTPinput[1],
                      //       OTPinput[2],
                      //       e.target.value,
                      //     ])
                      //   }
                    ></input>
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      //   onClick={() => verfiyOTP()}
                      className="flex flex-row cursor-pointer items-center justify-center text-center w-full border rounded-xl outline-none py-3 bg-black border-none text-white text-sm shadow-sm"
                    >
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't recieve code?</p>{" "}
                    <a
                      className="flex flex-row items-center"
                      //   style={{
                      //     color: disable ? "gray" : "blue",
                      //     cursor: disable ? "none" : "pointer",
                      //     textDecorationLine: disable ? "none" : "underline",
                      //   }}
                      //   onClick={() => resendOTP()}
                    >
                      {/* {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"} */}
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterotp;
