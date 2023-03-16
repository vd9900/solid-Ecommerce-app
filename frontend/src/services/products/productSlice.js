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
          page: 1,
          limit: 2,
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
    addRatingRange: (state, action) => {
      const previousSearchAndFilterValue = state.SearchAndFilter;
      return {
        ...state,
        SearchAndFilter: {
          ...previousSearchAndFilterValue,
          "rating[gte]": action.payload.minRating,
          "rating[lte]": action.payload.maxRating,
        },
      };
    },
    changePage: (state, action) => {
      const previousSearchAndFilterValue = state.SearchAndFilter;
      return {
        ...state,
        SearchAndFilter: {
          ...previousSearchAndFilterValue,
          page: action.payload,
        },
      };
    },
    addSort: (state, action) => {
      const previousSearchAndFilterValue = state.SearchAndFilter;
      return {
        ...state,
        SearchAndFilter: {
          ...previousSearchAndFilterValue,
          page: 1,
          sort: action.payload,
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
  changePage,
  addSort,
  clearFilter,
} = productSlice.actions;

export default productSlice.reducer;
