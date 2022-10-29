import { createSlice } from "@reduxjs/toolkit";


let initialState: any = {
  user: {
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    avatar: "",
    coverPhoto: "",
    gender: "",
    bio: "",
    address: "",
    country: "",
    city: "",
    phoneNumber: "",
    createdAt: "",
    verified: "",
    enabledPublickProfile: "",
    enabledPublickPost: "",
    enabledSEO: "",
    login_session_secret_Id: "",
    url: "",
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAuth(state, { payload }) {
      // TODO  @ later will we use amazone url
      let fixedUser = { ...payload, avatar: "/images/img10.jpg" };
      state.user = fixedUser;
    },
  },
});

export const { setUserAuth } = userSlice.actions;
export default userSlice;
