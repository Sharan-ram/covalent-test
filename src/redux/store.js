import { configureStore } from "@reduxjs/toolkit";
import TabsReducer from "./tabs";
import UserReducer from "./user";

const store = configureStore({
  reducer: {
    user: UserReducer,
    tabs: TabsReducer,
  },
});

export default store;
