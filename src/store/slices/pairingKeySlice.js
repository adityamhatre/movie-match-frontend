import { createSlice } from "@reduxjs/toolkit";

export const pairingKeySlice = createSlice({
  name: "pairingKey",
  initialState: {
    value: {
      currentUser: "",
      otherUser: "",
      pairingKey: "",
    },
  },
  reducers: {
    setPairingKey: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPairingKey } = pairingKeySlice.actions;
export default pairingKeySlice.reducer;
