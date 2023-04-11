import { emptySplitApi } from "../../api/emptySplitApi";

const forgotPassword = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    sendEmail: build.mutation({
      query: (details) => ({
        url: `api/vi/password/forgot/?email=${details}`,
        method: "POST",
        body: { email: details },
      }),
      invalidatesTags: [{ type: "Carts", id: "LIST" }],
    }),
    checkOTP: build.mutation({
      query: (userOTP) => ({
        url: `/api/vi/password/forgot/checkotp?otp=${userOTP}`,
        method: "POST",
      }),
    }),
    createPassword: build.mutation({
      query: (userInfo) => ({
        url: `api/vi/password/forgot/createNewPassword`,
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {
  useSendEmailMutation,
  useCheckOTPMutation,
  useCreatePasswordMutation,
} = forgotPassword;
