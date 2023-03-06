import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { emptySplitApi } from "./api/emptySplitApi";

export const store = configureStore({
  reducer: {
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});
