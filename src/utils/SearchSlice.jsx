import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheresult: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { cacheresult } = SearchSlice.actions;
export default SearchSlice.reducer;
