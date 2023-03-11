import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const cartSplice = createSlice({
  name: "cartTotal",
  initialState,
  reducers: {
    productsToCart: (state, action) => {
      return { ...state, products: [...action.payload] };
    },
    Increment_Price: (state, action) => {},
  },
});
