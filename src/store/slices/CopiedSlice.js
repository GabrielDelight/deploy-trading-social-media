import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCopied: false,
  copiedText: "",
};
const copiedSlice = createSlice({
  name: "copy",
  initialState,
  reducers: {
    onCopiedAction(state, { payload }) {
      payload.copiedState ? (state.isCopied = true) : (state.isCopied = false);
      state.copiedText = payload.copiedText;
    },
  },
});

export const { onCopiedAction } = copiedSlice.actions;
export default copiedSlice;

// Initalted in
// ---- Chat messages to copy chat
// ---- Copy profile
