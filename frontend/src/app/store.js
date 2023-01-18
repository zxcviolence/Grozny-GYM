import { configureStore } from "@reduxjs/toolkit";
import goods from "../features/goodsSlice"
import coach from "../features/coachSlice"
import users from "../features/usersSlice";

export const store =configureStore({
    reducer:{
        goods,
        users,
        coach,
    }
})
