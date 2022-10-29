import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  caption: "",
  postType: "",
  uploadType: {
    isPhoto: false,
    isVideo: false,
  },
  file: {
    images: {},
    video: {},
    thumbnail: {},
  },
  whoCanComment: true,
  whoCanSee: true,
  buttonIsDisabled: true,
  errorData: {
    type: null,
  },
};
const createPostSlice = createSlice({
  name: "createPostSlice",
  initialState,
  reducers: {
    textAreaChangeAction(state, { payload }) {
      state.caption = payload;

      // Configure the disable button
      if (state.postType === "video" || state.postType === "photo")
        if (state.caption.length < 300) {
          state.buttonIsDisabled = false;
        } else {
          state.buttonIsDisabled = true;
        }
    },
    choosUploadMediaType(state, { payload }) {
      if (payload === "video") {
        state.uploadType.isVideo = true;
        state.uploadType.isPhoto = false;
        state.postType = "video";
      }

      if (payload === "photo") {
        state.uploadType.isPhoto = true;
        state.uploadType.isVideo = false;
        state.postType = "photo";
      }
    },
    // Getting uploaded data from CreatePostMedia
    selectedFile(state, { payload }) {
      if (state.postType === "photo") state.file.images = payload;
      if (state.postType === "video") state.file.video = payload;

      if (state.caption.length <= 300) state.buttonIsDisabled = false;
    },
    uploadThumbnail(state, { payload }) {
      state.file.thumbnail = payload;
    },
    // This clears up the updated image
    resetImageUpload(state) {
      state.file.images = {};
      state.buttonIsDisabled = true;
    },

    reSetVideoUpload(state) {
      state.file.video = {};
      state.file.thumbnail = {};
      state.buttonIsDisabled = true;
    },

    // Who can comment on the post
    whoCanCommenthandlerAction(state, { payload }) {
      state.whoCanComment = !payload;
    },
    // WHo can see the post
    whoCanSeeHandlerAction(state, { payload }) {
      state.whoCanSee = !payload;
    },

    // Saving post to draft
    onSavePostHandlerAction(state) {},

    handleErrorAction(state, { payload }) {
      if (payload.type === "emptyCaption") {
        state.errorData = "emptyCaption";
      }
    },
    terminatePortCreationAction(state) {
      state.caption = "";
      state.postType = "";
      state.uploadType.isPhoto = "";
      state.uploadType.isVideo = "";
      state.file.images = {};
      state.file.video = {};
      state.whoCanComment = false;
      state.whoCanSee = false;
    },
  },
});

export const {
  choosUploadMediaType,
  selectedFile,
  resetImageUpload,
  textAreaChangeAction,
  whoCanCommenthandlerAction,
  whoCanSeeHandlerAction,
  onSavePostHandlerAction,
  reSetVideoUpload,
  handleErrorAction,
  terminatePortCreationAction,
  uploadThumbnail,
} = createPostSlice.actions;
export default createPostSlice;
