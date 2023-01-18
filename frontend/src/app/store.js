import { configureStore } from "@reduxjs/toolkit";
import goods from "../features/goodsSlice"
import coach from "../features/coachSlice"

export const store =configureStore({
    reducer:{
        goods,
        coach,
    }
})