import { emptySplitApi } from "../../api/emptySplitApi";

export const reviewsApi = emptySplitApi.injectEndpoints({
  endpoints: (bulider) => ({
    addReview: bulider.mutation({
      query: (info) => ({
        url: "api/vi/review",
        method: "PUT",
        body: info,
      }),
    }),
  }),
});

export const { useAddReviewMutation } = reviewsApi;
