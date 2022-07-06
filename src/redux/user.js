import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAssets as fetchAssetsApiHandler } from "../api";

const initialState = {
  address: "0x11577a8a5baf1e25b9a2d89f39670f447d75c3cd",
  fetchAssetsProgress: "notStarted",
  assets: [],
  fetchTransactionsProgress: "notStarted",
  transactions: [],
  error: "",
};

export const fetchAssets = createAsyncThunk(
  "user/fetchAssets",
  async ({ chain_id, userAddress }, thunkApi, _) => {
    try {
      const res = await fetchAssetsApiHandler({ chain_id, userAddress });
      return res;
    } catch (err) {
      return thunkApi.rejectWithValue([], err);
    }
  }
);

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAssets.fulfilled]: (state, { payload }) => {
      state.assets = payload;
      state.fetchTransactionsProgress = "complete";
    },
    [fetchAssets.pending]: (state) => {
      state.fetchTransactionsProgress = "inProgress";
    },
    [fetchAssets.rejected]: (state, { error }) => {
      state.fetchTransactionsProgress = "complete";
      state.error = error;
    },
  },
});

export const getUserAddress = (state) => state.user.address;

export const getUserAssets = (state) => state.user.assets;

export const getWalletBalance = (state) => {
  return Math.trunc(
    state.user.assets.reduce((total, cur) => total + cur.finalValue, 0)
  );
};

export default user.reducer;
