import { configureStore } from "@reduxjs/toolkit";
import goods from "../features/goodsSlice"

export const store =configureStore({
    reducer:{
        goods
    }
})