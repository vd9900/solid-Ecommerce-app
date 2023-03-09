import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { emptySplitApi } from "../../api/emptySplitApi";

const cartAdapter = createEntityAdapter({
  selectId: (cart) => cart.id,
});
const initialState = cartAdapter.getInitialState();

// const apiWithTag = emptySplitApi.enhanceEndpoints({ addTagTypes: ["Carts"] });
export const cartApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    carts: build.query({
      query: () => "api/vi/mycarts",
      validateStatus: (response, result) =>
        response.status === 200 && !result.isError,
      transformResponse: (responseData) => {
        const loadCarts = responseData.map((cart) => {
          cart.id = cart._id;
          return cart;
        });
        return cartAdapter.setAll(initialState, loadCarts);
      },
      providesTags: (result, error, arg) => {
        if (result?.id) {
          return [
            { type: "Carts", id: "LIST" },
            ...result.id.map((id) => ({
              type: "Carts",
              id,
            })),
          ];
        } else {
          return [{ type: "Carts", id: "LIST" }];
        }
      },
    }),
    addToCart: build.mutation({
      query: (details) => ({
        url: `api/vi//mycarts`,
        method: "POST",
        body: details,
      }),
      invalidatesTags: [{ type: "Carts", id: "LIST" }],
    }),
    deleteFromCart: build.mutation({
      query: (productId) => ({
        url: `api/vi//mycarts/?id=${productId}`,
        method: "DELETE",
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

export const { selectAll, selectEntities, selectById } =
  cartAdapter.getSelectors((state) => selectCartData(state) ?? initialState);
