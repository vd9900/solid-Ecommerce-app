import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserEmail: "",
  SearchAndFilter: {},
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
    addSearchValue: (state, action) => {
      const previousSearchAndFilterValue = state.SearchAndFilter;
      return {
        ...state,
        SearchAndFilter: {
          search: action.payload,
        },
      };
    },
    clearFilter: (state, action) => {
      return { ...state, SearchAndFilter: {} };
    },
    addPriceRange: (state, action) => {
      const previousSearchAndFilterValue = state.SearchAndFilter;
      return {
        ...state,
        SearchAndFilter: {
          ...previousSearchAndFilterValue,
          "price[gte]": action.payload.minValue,
          "price[lte]": action.payload.maxValue,
        },
      };
    },
  },
});

export const {
  UserEmail,
  UserAddress,
  addSearchValue,
  addPriceRange,
  clearFilter,
} = productSlice.actions;

export default productSlice.reducer;
