import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAssets as fetchAssetsApiHandler } from "../api";

const initialState = {
  fetchProgress: "notStarted",
  assets: [],
  error: "",
};

export const fetchAssets = createAsyncThunk(
  "assets/fetchAssets",
  async ({ chain_id, userAddress }, thunkApi, _) => {
    try {
      const res = await fetchAssetsApiHandler({ chain_id, userAddress });
      return res;
    } catch (err) {
      return thunkApi.rejectWithValue([], err);
    }
  }
);

export const assets = createSlice({
  name: "assets",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAssets.fulfilled]: (state, { payload }) => {
      state.assets = payload;
      state.fetchProgress = "complete";
    },
    [fetchAssets.pending]: (state) => {
      state.fetchProgress = "inProgress";
    },
    [fetchAssets.rejected]: (state, { error }) => {
      state.fetchProgress = "complete";
      state.error = error;
    },
  },
});

export const getUserAssets = (state) => state.assets.assets;

export const getFetchProgress = (state) => state.assets.fetchProgress;

export const getWalletBalance = (state) => {
  return Math.trunc(
    state.assets.assets.reduce((total, cur) => total + cur.finalValue, 0)
  );
};

export default assets.reducer;
