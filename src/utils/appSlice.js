import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    dismissMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, dismissMenu } = appSlice.actions;

export default appSlice.reducer;
