import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
    deleteCacheResults: (state) => {
      const cacheObj = Object.keys(state);
      delete state[cacheObj[0]];
    },
  },
});

export const { cacheResults, deleteCacheResults } = searchSlice.actions;

export default searchSlice.reducer;
