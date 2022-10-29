import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import forwardSlice from "./slices/forwardSlice";
import chatSlice from "./slices/chatSlice";
import copiedSlice from "./slices/CopiedSlice";
import createPostSlice from "./slices/createPostSlice";
import storySlice from "./slices/storySlice";
import { usersApi } from "./services/users";
import { followAPI } from "./services/followApi";
import { postAPi } from "./services/postApi";
import userSlice from "./slices/user";
import { authSlice } from "./slices/Auth";
import themeSlice from "./slices/themeSlice";
import emojiSlice from "./slices/emojiSlice";
export const store = configureStore({
  reducer: {
    // Splice sections
    [forwardSlice.name]: forwardSlice.reducer,
    [chatSlice.name]: chatSlice.reducer,
    [copiedSlice.name]: copiedSlice.reducer,
    [createPostSlice.name]: createPostSlice.reducer,
    [storySlice.name]: storySlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [themeSlice.name]: themeSlice.reducer,
    [emojiSlice.name]: emojiSlice.reducer,
    // Api sections
    [usersApi.reducerPath]: usersApi.reducer,
    [authSlice.name]: authSlice.reducer,

    // Follow section\
    [followAPI.reducerPath]: followAPI.reducer,
    // Creare post api
    [postAPi.reducerPath]: postAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // @ serializableCheck:false; This help you to work with input fomrData
    })
      .concat(usersApi.middleware)
      .concat(followAPI.middleware)
      .concat(postAPi.middleware),
});

setupListeners(store.dispatch);
