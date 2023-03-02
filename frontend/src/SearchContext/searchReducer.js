export const searchReducer = (state, dispatch) => {
  switch (dispatch.type) {
    case "ADD_SEARCH_QUERY":
      return dispatch.payload;
    default:
      return state;
  }
};
