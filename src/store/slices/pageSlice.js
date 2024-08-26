import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
});

export const { increment } = pageSlice.actions;
export default pageSlice.reducer;
