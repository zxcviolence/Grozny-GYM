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
  async ({ name, image }, thunkAPI) => {
    try {
      const res = await fetch("/simulators/add", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().users.token}`,
        },
        method: "POST",
        body: JSON.stringify({ name, image }),
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

export const deleteSimulator = createAsyncThunk(
  "simulator/update",
  async ({ id }, thunkAPI) => {
    try {
      await fetch(`/simulator/${id}`, {
        method: "DELETE",
      });

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: "Ошибка при удалении" });
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
      })
      .addCase(addSimulator.fulfilled, (state, action) => {
        state.simulators = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(addSimulator.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addSimulator.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSimulator.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteSimulator.pending, (state, action) => {
        state.error = null;
        state.simulators = state.simulators.map((item) => {
          if (item._id === action.meta.arg._id) {
            item.loading = true;
          }
          return item;
        });
        state.loading = true;
      })
      .addCase(deleteSimulator.fulfilled, (state, action) => {
        state.error = null;
        state.simulators = state.simulators.filter((item) => {
          return item._id !== action.payload;
        });
        state.loading = false;
      });
  },
});

export default simulatorsSlice.reducer;
