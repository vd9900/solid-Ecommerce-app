import { emptySplitApi } from "../api/emptySplitApi";
export const userApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    userInfo: builder.query({
      query: (email) => `api/vi/me/?email=${email}`,
    }),
  }),
});

export const { useUserInfoQuery } = userApi;
