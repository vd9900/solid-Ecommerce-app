import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { emptySplitApi } from "./api/emptySplitApi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import productSlice from "./services/products/productSlice";
import cartSplice from "./services/carts/cartSplice";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["productsStore"],
};

const rootReducer = combineReducers({
  [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  productsStore: productSlice,
  cartsStore: cartSplice,
});

const newPersistReducer = persistReducer(rootPersistConfig, rootReducer);
// export const store = configureStore({
//   reducer: {
//     [emptySplitApi.reducerPath]: emptySplitApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(emptySplitApi.middleware),
// });

// const storee = createStore(
//   applyMiddleware(emptySplitApi.middleware)
// );

export const store = configureStore({
  reducer: newPersistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});
export const persistor = persistStore(store);
export default store;
