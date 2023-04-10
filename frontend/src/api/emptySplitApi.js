import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const emptySplitApi = createApi({
  reducerPath: "apisInfo",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    // baseUrl: "https://solid-ecommerce.onrender.com/",
    credentials:"include",
    headers: {'Content-Type': 'application/json'}
  }),
  endpoints: () => ({}),
  tagTypes: ["USER"],
});
