import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../cookie/getCookie";
import { useUploadFileMutation } from "../services/users";
import axios from "axios";
const token = getCookie();
let initialState = {
  type: "",
  caption: "",
  mainUploadType: "",
  files: {
    image: null,
    video: null,
  },
  format: {
    color: "",
    fontFamily: "",
  },
};

const storySlice = createSlice({
  name: "storySlice",
  initialState,
  reducers: {
    // This tells if main action is POST or CHAT
    mainUploadTypeAction(state, { payload }) {
      state.mainUploadType = payload;
    },

    // Stort caption
    captionAction(state, { payload }) {
      state.caption = payload;
      state.type = "text";
    },

    // Getting the selected image
    onGetImageFIleAction(state, { payload }) {
      state.type = "photo";
      state.files.image = payload;
      state.files.video = null;
    },

    // Getting the selected image
    onGetVideoFileAction(state, { payload }) {
      state.type = "video";
      state.files.video = payload;
      state.files.image = null;
    },

    // Resetting the files
    onResetAction(state) {
      state.type = "text";
      state.files.image = null;
      state.files.video = null;
    },

    // Setting color
    captionColorAction(state, { payload }) {
      state.format.color = payload;
    },

    // Setting font
    captionFontFamilyAction(state, { payload }) {
      state.format.fontFamily = payload;
    },

    // Final upload story button
    uploadStoryButton(state) {
      if (state.mainUploadType === "chat") {
        console.log("For chat purpose");
      }

      if (state.mainUploadType === "status") {
      
      }
    },
  },
});

export const {
  onGetImageFIleAction,
  onResetAction,
  onGetVideoFileAction,
  captionColorAction,
  captionFontFamilyAction,
  uploadStoryButton,
  captionAction,
  mainUploadTypeAction,
} = storySlice.actions;
export default storySlice;
