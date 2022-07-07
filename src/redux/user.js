import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "0x11577a8a5baf1e25b9a2d89f39670f447d75c3cd",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const getUserAddress = (state) => state.user.address;

export default user.reducer;
