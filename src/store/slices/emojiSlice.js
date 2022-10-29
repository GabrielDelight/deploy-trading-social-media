import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  emoji: "",
  emojiIndex: 0,
};
const emojiSlice = createSlice({
  name: "emoji",
  initialState,
  reducers: {
    emojiAction(state, { payload }) {
      state.emoji = payload;
      state.emojiIndex = Math.random();
    },
  },
});

export const { emojiAction } = emojiSlice.actions;
export default emojiSlice;
