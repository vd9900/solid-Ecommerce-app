import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { emptySplitApi } from "../../api/emptySplitApi";

const cartAdapter = createEntityAdapter({});
const initialState = cartAdapter.getInitialState();

// const apiWithTag = emptySplitApi.enhanceEndpoints({ addTagTypes: ["Carts"] });
export const cartApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    carts: build.query({
      query: () => "api/vi/mycarts",
      transformResponse: (responseData) => {
        const loadCarts = responseData.map((cart) => {
          cart.id = cart._id;
          return cart;
        });
        return cartAdapter.setAll(initialState, loadCarts);
      },
      // providesTags: ["Carts"],
    }),
    addToCart: build.mutation({
      query: (details) => ({
        url: `api/vi//mycarts`,
        method: "POST",
        body: details,
      }),
      invalidatesTags: ["Carts"],
    }),
    deleteFromCart: build.mutation({
      query: (productId) => ({
        url: `api/vi//mycarts/`,
        method: "DELETE",
        body: productId,
      }),
      invalidatesTags: ["Carts"],
    }),
  }),
});

export const {
  useCartsQuery,
  useAddToCartMutation,
  useDeleteFromCartMutation,
} = cartApi;

// return the query result object

export const selectCartResult = cartApi.endpoints.carts.select();

// creates memoized selector

const selectCartData = createSelector(
  selectCartResult,
  (cartResult) => cartResult.data // normalized state object with cart id
);

export const { selectAll, selectById, selectEntities } =
  cartAdapter.getSelectors((state) => selectCartData(state) ?? initialState);
