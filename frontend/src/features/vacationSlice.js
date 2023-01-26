import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  error: [],
  vacation: [],
};

export const getVacation = createAsyncThunk("get/vacation", async (_, thunkAPI) => {
  try {
    const res = await fetch("/vacations");
    const vacation = await res.json();

    if (vacation.error) {
      return thunkAPI.rejectWithValue(vacation.error);
    }
    return thunkAPI.fulfillWithValue(vacation);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const postVacation = createAsyncThunk(
  "post/vacation",
  async ({ name, number, surname, job, message, email,   }, thunkAPI) => {
    try {
      const res = await fetch("/vacations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, number, surname, job, message, email,  }),
      });
      const form = await res.json();
      return thunkAPI.fulfillWithValue(form);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteVacation = createAsyncThunk(
  "delete/vacation",
  async ({ id }, thunkAPI) => {
    try {
      await fetch(`/vacations/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: "Ошибка при удалении" });
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(getVacation.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getVacation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVacation.fulfilled, (state, action) => {
        state.error = null;
        state.form = action.payload;
        state.loading = false;
      })
      // POST
      .addCase(postVacation.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(postVacation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postVacation.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.vacation = action.payload;
      })
      // DELETE
      .addCase(deleteVacation.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteVacation.pending, (state, action) => {
        state.error = null;
        state.vacation = state.vacation.map((item) => {
          if (item._id === action.meta.arg._id) {
            item.loading = true;
          }
          return item;
        });
        state.loading = true;
      })
      .addCase(deleteVacation.fulfilled, (state, action) => {
        state.error = null;
        state.vacation = state.vacation.filter((item) => {
          return item._id !== action.payload;
        });
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;
