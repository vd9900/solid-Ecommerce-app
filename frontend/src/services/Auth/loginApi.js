import { emptySplitApi } from "../../api/emptySplitApi";

export const loginApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (details) => ({
        url: `api/vi/login`,
        method: "POST",
        body: details,
      }),
    }),
    signUp: builder.mutation({
      query: (details) => ({
        url: `api/vi/register`,
        method: "POST",
        body: details,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = loginApi;
