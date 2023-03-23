import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const cartSplice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      // your logic to add item to the cart

      state.products = action.payload.products;
    },
    deleteTheCartQty: (state, action) => {
      state.products = state.products.filter(
        (pro) => pro.id !== action.payload
      );
    },
    incrementQty: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.products.findIndex((item) => item.id === itemId);
      if (itemIndex >= 0 && state.products[itemIndex].quantity < 12) {
        state.products[itemIndex].quantity += 1;
      }
    },
    decrementQty: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.products.findIndex((item) => item.id === itemId);
      if (itemIndex >= 0 && state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;
      }
    },
    calucalteToltal: (state, action) => {
      state.total = action.payload;
    },
    ClearTheCart: (state, action) => {
      return (state = {
        products: [],
        total: 0,
      });
    },
  },
});

export const {
  incrementQty,
  decrementQty,
  AddToCart,
  deleteTheCartQty,
  calucalteToltal,
  ClearTheCart,
} = cartSplice.actions;

export default cartSplice.reducer;
