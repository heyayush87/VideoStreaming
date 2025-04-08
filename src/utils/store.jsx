import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./SearchSlice";
import ChatSliceReducer from "./ChatSlice";
export const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    chat: ChatSliceReducer,
  },
});
export default store;
