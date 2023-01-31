import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  goods: [],
  loadings: false,
  error: null,
};
export const addBar = createAsyncThunk(
  "sportbar/add",
  async ({name, price, subtitle, brand, image}, thunkAPI) => {
    try {
      const res = await fetch("/goods/", {
        headers: {'Content-Type': 'application/json',
                Authorization: `Bearer ${thunkAPI.getState().users.token}`,
      },
      method: 'POST',
      body: JSON.stringify({name, image, price, subtitle, brand})
        
      });
      const simulators = await res.json();

      if (simulators.error) {
        return thunkAPI.rejectWithValue(simulators.error);
      }

      return thunkAPI.fulfillWithValue(simulators);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
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
      .addCase(addBar.fulfilled, (state, action) => {
        state.loadings = false;
        state.error = null;
        state.goods = action.payload;
      })
      .addCase(addBar.rejected, (state, action) => {
        state.loadings = false;
        state.error = action.payload;
      })
      .addCase(addBar.pending, (state, action) => {
        state.error = null;
        state.loadings = true;
      })
  },
});

export default goodsSlice.reducer;
