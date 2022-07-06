import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "assets",
};

export const tabs = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    toggleActiveTab: (state) => {
      state.activeTab =
        state.activeTab === "assets" ? "transactions" : "assets";
    },
  },
});

export const { toggleActiveTab } = tabs.actions;

export const getActiveTab = (state) => state.tabs.activeTab;

export default tabs.reducer;
