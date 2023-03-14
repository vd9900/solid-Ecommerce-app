import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserEmail: "",
};

const productSlice = createSlice({
  name: "productsValues",
  initialState,
  reducers: {
    UserEmail: (state, action) => {
      return { ...state, UserEmail: action.payload };
    },
    UserAddress: (state, action) => {
      return { ...state, UserAddress: action.payload };
    },
  },
});

export const { UserEmail, UserAddress } = productSlice.actions;

export default productSlice.reducer;
