import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    value: [],
  },
  reducers: {
    removeItem: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    addItems: (state, action) => {
      state.value = action.payload.concat(state.value);
    },
  },
});

export const { removeItem, addItem, addItems } = listSlice.actions;
export default listSlice.reducer;
