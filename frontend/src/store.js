import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productReducer,
} from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  userInfo: userReducer,
});

const iniitalState = {};

const middleware = [thunk];

export const store = createStore(
  reducer,
  iniitalState,
  composeWithDevTools(applyMiddleware(...middleware))
);
