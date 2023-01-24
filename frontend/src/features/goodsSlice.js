import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  goods: [],
  loadings: false,
  error: null,
};

export const fetchGoods = createAsyncThunk(
  "goods/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/goods");

      const goods = await res.json();

      if (goods.error) {
        return thunkAPI.rejectWithValue(goods.error);
      }
      return thunkAPI.fulfillWithValue(goods);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchGoodsId = createAsyncThunk(
//   "goods/fetchId",
//   async({id}, thunkAPI) => {
//     try {
//       const res = await fetch(`/goods/${id}`);
//       const goods = await res.json()

//       if (goods.error) {
//         return thunkAPI.rejectWithValue(goods.error);
//       }
//       return thunkAPI.fulfillWithValue(goods);
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
//   )



const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.loadings = false;
        state.error = null;
        state.goods = action.payload;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.loadings = false;
        state.error = action.payload;
      })
      .addCase(fetchGoods.pending, (state, action) => {
        state.error = null;
        state.loadings = true;
      })
      // .addCase(fetchGoodsId.fulfilled, (state, action) => {
      //   state.loadings = false;
      //   state.error = null;
      //   state.goods = action.payload;
      // })
      // .addCase(fetchGoodsId.rejected, (state, action) => {
      //   state.loadings = false;
      //   state.error = action.payload;
      // })
      // .addCase(fetchGoodsId.pending, (state, action) => {
      //   state.error = null;
      //   state.loadings = true;
      // });
  },
});

export default goodsSlice.reducer;
