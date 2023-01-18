import { configureStore } from "@reduxjs/toolkit";
import goods from "../features/goodsSlice";
import users from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    goods,
    users,
  },
});