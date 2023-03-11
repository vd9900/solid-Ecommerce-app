import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productSlice = createSlice({
  name: "productsValues",
  initialState,
  reducers: {
    addClickedValueOfProduct: (state, action) => {
      return { ...state, clickedProduct: action.payload };
    },
    addClickedCategoryValueOfProduct: (state, action) => {
      return { ...state, clickedCategory: action.payload };
    },
    UserEmail: (state, action) => {
      return { ...state, UserEmail: action.payload };
    },
  },
});

export const {
  addClickedValueOfProduct,
  addClickedCategoryValueOfProduct,
  UserEmail,
} = productSlice.actions;

export default productSlice.reducer;
