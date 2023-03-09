import { emptySplitApi } from "../api/emptySplitApi";

export const userApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    userInfo: builder.query({
      query: (email) => `api/vi/me/?email=${email}`,
      providesTags: ["USER"],
    }),
    updateUserInfo: builder.mutation({
      query: (info) => ({
        url: "api/vi/me/update",
        method: "PUT",
        body: info,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const { useUserInfoQuery, useUpdateUserInfoMutation } = userApi;
