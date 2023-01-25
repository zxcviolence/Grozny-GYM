import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  Subscription: [],
};

export const fetchSubscription = createAsyncThunk(
  "subscriptions/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/users/subscriptions");
      const subscription = await res.json();

      console.log(subscription,"23214124")

      if (subscription.error) {
        return thunkAPI.rejectWithValue(subscription.error);
      }
      return thunkAPI.fulfillWithValue(subscription);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const SubscriptionSlice = createSlice({
  name: "Subscription",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchSubscription.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchSubscription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.Subscription = action.payload;
      })
  },
});

export default SubscriptionSlice.reducer
