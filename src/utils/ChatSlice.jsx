import { createSlice } from "@reduxjs/toolkit";
const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.push(action.payload);
    },
  },
});
export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
