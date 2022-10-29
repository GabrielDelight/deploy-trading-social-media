import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: JSON.parse(window.localStorage.getItem("local-htlop")),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAuth() {},
  },
});

const {} = authSlice.actions;
