import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "test",
};

const HomeSlice = createSlice({
  name: "HomeSlice",
  initialState,
  reducers: {
    newName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { newName } = HomeSlice.actions;
export const reducer = HomeSlice.reducer;
