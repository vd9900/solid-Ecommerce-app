import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emptySplitApi = createApi({
  reducerPath: "apisInfo",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    credentials: "include",
  }),
  endpoints: () => ({}),
  tagTypes: ["USER"],
});
