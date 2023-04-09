import { configureStore, getDefaultMiddleware,combineReducers } from "@reduxjs/toolkit";
import { emptySplitApi } from "./api/emptySplitApi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
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

export const store = configureStore({
  reducer: newPersistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // disable the default serializableCheck middleware
    }).concat(emptySplitApi.middleware),
  devTools: true,
});

export const persistor = persistStore(store);
