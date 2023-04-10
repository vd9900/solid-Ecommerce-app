import { emptySplitApi } from "../../api/emptySplitApi";

export const loginApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (details) => ({
        url: `api/vi/login`,
        method: "post",
        body: details,
      }),
    }),
    signUp: builder.mutation({
      query: (details) => ({
        url: `/api/vi/register`,
        method: "post",
        body: details,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = loginApi;
