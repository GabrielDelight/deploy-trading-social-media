import { createSlice } from "@reduxjs/toolkit";

let initialState = {};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    onDeletePost() {
      console.log("Delete post..");
    },
  },
});

export const { onDeletePost } = postSlice.actions;
export default postSlice.reducer;
