import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  selectedPeople: [],
  searchedValue: "",
  forwardIsOpen: false,
};
const forwardSlice = createSlice({
  name: "forward",
  initialState,
  reducers: {
    onSearchusersHandler(state, { payload }) {
      //Searching for users
      state.searchedValue = payload.value;
    },
    // @ Addign to forward
    addToForward(state, { payload }) {
      // check if item already exists
      let findIndex = state.selectedPeople.find((cur) => cur.id === payload.id);

      if (typeof findIndex === "undefined")
        if (state.selectedPeople.length < 5) state.selectedPeople.push(payload);
    },
    // remove from forward
    removeFormForward(state, { payload }) {
      let filteredUsers = state.selectedPeople.filter((cur) => {
        return cur.id !== payload.id;
      });
      // @important make sure you set it back to the old state
      state.selectedPeople = filteredUsers;
    },
    onSaveForwardList(state, { payload }) {
      console.log(payload);
      // Here notthing much just send it to a server
      state.forwardIsOpen = true;
    },
  },
});
export const {
  addToForward,
  removeFormForward,
  onSaveForwardList,
  onSearchusersHandler,
} = forwardSlice.actions;

export default forwardSlice;
