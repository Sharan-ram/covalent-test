import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "0x5ed3608242a1e9cccf45198d78ac2c7d54cd484f",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const getUserAddress = (state) => state.user.address;

export default user.reducer;
