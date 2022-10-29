import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  reply: {
    chatData: {
      caption: "",
      senderName: "",
    },
    isReplying: false,
  },
  // Deleting chat
  deleteState: {
    visibility: false,
    chatId: undefined,
    isConfrimed: false,
  },
  navigate: {
    isMessageList: true,
    isVideoCallList: false,
  },
  messageListOption: {
    visibility: false,
    indexing: 0,
    receiverId: "",
    messageId: null,
  },
  deleteMesssage: {
    isdeleteing: false,
    deleteMessageId: undefined,
  },
  // SearchChat
  searchChat: {
    scrollDir: "",
    searchedValue: "",
    randomNUmbers: "",
    isSearching: false,
  },
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    replyingState(state, payload) {
      state.reply.isReplying = true;
      state.reply.chatData.caption = payload.payload.caption;
      state.reply.chatData.senderName = payload.payload.senderName;
      //   Make use for the payload to get the captio of comenent
    },
    // Closing the reply
    closeReplyState(state) {
      state.reply.isReplying = false;
    },

    // Deleteing chats such as video, audio, vn, image , text
    chatDeleteFunctionAction(state, { payload }) {
      state.deleteState.visibility = !state.deleteState.visibility;
      state.deleteState.chatId = payload.chatId;
      // Status can be success or cancel
      if (payload.status === "success") {
        // If state is success or cancel
        state.deleteState.isConfrimed = true;
      }
    },
    closeDeleteAction(state) {
      state.deleteState.isConfrimed = false;
      // You can use fetch to delete from here
    },

    // Navigating from message to video call list
    navigateMessageAndVideoCall(state, { payload }) {
      if (payload.message) {
        state.navigate.isMessageList = true;
        state.navigate.isVideoCallList = false;
      }
      if (payload.vc) {
        state.navigate.isMessageList = false;
        state.navigate.isVideoCallList = true;
      }
    },
    optionHandlerAction(state, { payload }) {
      if (payload.actionType === "start") {
        // console.log("========", payload.id);
        state.messageListOption.visibility = true;
        state.messageListOption.indexing = payload.indexing;
        state.messageListOption.receiverId = payload.receiverId;
        state.messageListOption.messageId = payload.messageId;
      }

      // Here is closing or hiding the option componnet
      if (payload.actionType === "end") {
        state.messageListOption.visibility = false;
      }
    },

    // Delete Message action
    onDeleteMessageAction(state, { payload }) {
      // Getting the message id passed from payload at
      // @ code at DeleteMessage Wrapper.jsx
      state.deleteMesssage.deleteMessageId = state.messageListOption.messageId;

      // Closting teh messagge option header
      state.messageListOption.visibility = false;
    },

    // Searching for chat at SearchChat.tsx
    // @ also usiong the scrool top and button
    onChatSearchAction(state, { payload }) {
      state.searchChat.scrollDir = payload.direction;
      state.searchChat.searchedValue = payload.searchedValue;
      if (payload.isSearcing) state.searchChat.isSearching = true;
      if (!payload.isSearcing) state.searchChat.isSearching = false;

      // console.log("Action gere===>", payload);

      // Generate random number so that the state will be changeing
      // @ to enable scroll  up and down
      // @ to enable reredndeing
      state.searchChat.randomNUmbers = Math.random();
    },
  },
});

export const {
  replyingState,
  closeReplyState,
  chatDeleteFunctionAction,
  navigateMessageAndVideoCall,
  optionHandlerAction,
  onDeleteMessageAction,
  onChatSearchAction,
  closeDeleteAction,
} = chatSlice.actions;
export default chatSlice;
