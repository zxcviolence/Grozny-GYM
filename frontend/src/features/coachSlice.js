import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  coaches: [],
  error: null,
  loading: false,
};

export const fetchCoaches = createAsyncThunk(
  "coaches/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/coaches");
      const coaches = await res.json();

      if (coaches.error) {
        return thunkAPI.rejectWithValue(coaches.error);
      }

      return thunkAPI.fulfillWithValue(coaches);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const coachesSlice = createSlice({
  name: "coaches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoaches.fulfilled, (state, action) => {
        state.coaches = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCoaches.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchCoaches.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default coachesSlice.reducer;
