import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { emptySplitApi } from "./api/emptySplitApi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import productSlice from "./services/products/productSlice";

// const rootPersistConfig = {
//   key: "root",
//   storage: storage,
//   whitelist: ["productsStore"],
// };
// const newPersistReducer = persistReducer(rootPersistConfig, productSlice);

// const rootReducer = combineReducers({
//   [emptySplitApi.reducerPath]: emptySplitApi.reducer,
//   productsStore: newPersistReducer,
// });

export const store = configureStore({
  reducer: {
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    productsStore: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});

// const storee = createStore(
//   newPersistReducer,
//   applyMiddleware(emptySplitApi.middleware)
// );

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(emptySplitApi.middleware),
// });
export default store;
