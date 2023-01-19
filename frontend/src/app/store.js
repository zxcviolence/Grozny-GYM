import { configureStore } from "@reduxjs/toolkit";
import goods from "../features/goodsSlice"
import coach from "../features/coachSlice"
import users from "../features/usersSlice";
import simulators from "../features/simulatorsSlice";

export const store =configureStore({
    reducer:{
        goods,
        simulators,
        users,
        coach,
    }
})
