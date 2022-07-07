import { configureStore } from "@reduxjs/toolkit";
import TabsReducer from "./tabs";
import AssetsReducer from "./assets";
import UserReducer from "./user";
import TransactionsReducer from "./transactions";

const store = configureStore({
  reducer: {
    assets: AssetsReducer,
    tabs: TabsReducer,
    user: UserReducer,
    transactions: TransactionsReducer,
  },
});

export default store;
