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
  },
});

export const { UserEmail } = productSlice.actions;

export default productSlice.reducer;
