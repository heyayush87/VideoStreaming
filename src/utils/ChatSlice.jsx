import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_DATA } from "./constant";
const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(OFFSET_LIVE_DATA, 1);
      state.message.push(action.payload);
    },
  },
});
export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
