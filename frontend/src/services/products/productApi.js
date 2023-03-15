import { emptySplitApi } from "../../api/emptySplitApi";

export const getAllProductsApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query({
      query: () => "/api/vi/products",
    }),
    product: builder.query({
      query: (id) => `/api/vi/product?id=${id}`,
    }),
    productByCategory: builder.query({
      query: (query) => `/api/vi/products/?${query}`,
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
