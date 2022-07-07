import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const getUserAddress = (state) => state.user.address;

export const { setUserAddress } = user.actions;

export default user.reducer;
