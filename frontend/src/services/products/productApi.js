import { emptySplitApi } from "../../api/emptySplitApi";
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

export const getAllProductsApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query({
      query: () => "api/vi/products",
    }),
    product: builder.query({
      query: (id) => `api/vi/product?id=${id}`,
    }),
    productByCategory: builder.query({
      query: (category) => `api/vi/products?category=${category}`,
    }),
    addToCart: builder.mutation({
      query: (details) => ({
        url: `api/vi//mycarts`,
        method: "POST",
        body: details,
      }),
    }),
  }),
});

export const {
  useProductsQuery,
  useProductQuery,
  useProductByCategoryQuery,
  useAddToCartMutation,
} = getAllProductsApi;
