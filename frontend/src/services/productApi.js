import { emptySplitApi } from "../api/emptySplitApi";
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
  }),
});

export const { useProductsQuery, useProductQuery, useProductByCategoryQuery } =
  getAllProductsApi;
