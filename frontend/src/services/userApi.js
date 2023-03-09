import { emptySplitApi } from "../api/emptySplitApi";
export const userApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    userInfo: builder.query({
      query: (email) => `api/vi/me/?email=${email}`,
    }),
    updateUserInfo: builder.mutation({
      query: (info) => ({
        url: "api/vi/me",
        method: "PATCH",
        body: info,
      }),
    }),
  }),
});

export const { useUserInfoQuery } = userApi;
