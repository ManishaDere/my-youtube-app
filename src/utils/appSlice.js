import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    toggle: true,
  },
  reducers: {
    toggleMenu: (state) => {
      console.log("state.toggle before ==>", state.toggle);
      state.toggle = !state.toggle;
      console.log("state.toggle after ==>", state.toggle);
      return state;
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
