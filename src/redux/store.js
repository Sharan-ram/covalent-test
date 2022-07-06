import { configureStore } from "@reduxjs/toolkit";
import TabsReducer from "./tabs";

const store = configureStore({
  reducer: {
    tabs: TabsReducer,
  },
});

export default store;
