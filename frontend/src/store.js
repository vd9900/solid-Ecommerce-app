import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
});

const iniitalState = {};

const middleware = [thunk];

export const store = createStore(
  reducer,
  iniitalState,
  composeWithDevTools(applyMiddleware(...middleware))
);
