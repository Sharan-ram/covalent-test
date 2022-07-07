import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchTransactions as fetchTransactionsApiHandler } from "../api";

const initialState = {
  fetchProgress: "notStarted",
  transactions: [],
  error: "",
};

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async ({ chain_id, userAddress }, thunkApi, _) => {
    try {
      const res = await fetchTransactionsApiHandler({ chain_id, userAddress });
      return res;
    } catch (err) {
      return thunkApi.rejectWithValue([], err);
    }
  }
);

export const transactions = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTransactions.fulfilled]: (state, { payload }) => {
      state.transactions = payload;
      state.fetchProgress = "complete";
    },
    [fetchTransactions.pending]: (state) => {
      state.fetchProgress = "inProgress";
    },
    [fetchTransactions.rejected]: (state, { error }) => {
      state.fetchProgress = "complete";
      state.error = error;
    },
  },
});

export const getUserTransactions = (state) => state.transactions.transactions;

export default transactions.reducer;
