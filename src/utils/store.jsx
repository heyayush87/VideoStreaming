import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./SearchSlice";
export const store = configureStore({
  reducer: {
    app: appReducer,
    SearchSlice: searchReducer,
  },
});
export default store;
