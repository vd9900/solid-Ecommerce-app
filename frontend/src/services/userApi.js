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
    uploadProfile: builder.mutation({
      query: (detail) => ({
        url: "api/vi/upload/profile",
        method: "PUT",
        body: detail,
      }),
    }),
  }),
});

export const {
  useUserInfoQuery,
  useUpdateUserInfoMutation,
  useUploadProfileMutation,
} = userApi;
