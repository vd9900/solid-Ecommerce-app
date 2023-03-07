import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { emptySplitApi } from "./api/emptySplitApi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import productSlice from "./services/products/productSlice";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";

const rootPersistConfig = {
  key: "root",
  storage: storage,
};
const authPersistConfig = {
  key: "auth",
  storage: storage,
  blacklist: ["somethingTemporary"],
};

const rootReducer = combineReducers({
  [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  productsStore: productSlice,
});

const newPersistReducer = persistReducer(rootPersistConfig, rootReducer);
// export const store = configureStore({
//   reducer: {
//     [emptySplitApi.reducerPath]: emptySplitApi.reducer,
//     productsStore: productSlice,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(emptySplitApi.middleware),
// });

// const storee = createStore(
//   newPersistReducer,
//   applyMiddleware(emptySplitApi.middleware)
// );

const store = configureStore({
  reducer: newPersistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});
export default store;
