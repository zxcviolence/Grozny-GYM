import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  simulators: [],
  error: null,
  loading: false,
};

export const fetchSimulators = createAsyncThunk(
  "simulators/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/simulators");
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
export const addSimulator = createAsyncThunk(
  "simulators/add",
  async ({name, image}, thunkAPI) => {
    try {
      const res = await fetch("/simulators/add", {
        headers: {'Content-Type': 'application/json',
                Authorization: `Bearer ${thunkAPI.getState().users.token}`,
      },
      method: 'POST',
      body: JSON.stringify({name, image})
        
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

const simulatorsSlice = createSlice({
  name: "simulators",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSimulators.fulfilled, (state, action) => {
        state.simulators = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSimulators.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchSimulators.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default simulatorsSlice.reducer;
