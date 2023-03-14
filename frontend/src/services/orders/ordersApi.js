import { emptySplitApi } from "../../api/emptySplitApi";

const orderApi = emptySplitApi.injectEndpoints({
  endpoints: (bulid) => ({
    createOrder: bulid.mutation({
      query: (details) => ({
        url: "api/vi//myorders/new",
        method: "post",
        body: details,
      }),
    }),
    getOrderDetails: bulid.query({
      query: () => "api/vi/myorders",
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderDetailsQuery } = orderApi;
