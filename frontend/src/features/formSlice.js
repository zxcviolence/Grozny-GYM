import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: [],
  loading: false,
  error: null,
};

export const getForm = createAsyncThunk(
  "get/form",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/admin/form");
      const form = await res.json();

      if (form.error) {
        return thunkAPI.rejectWithValue(form.error);
      }
      return thunkAPI.fulfillWithValue(form)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postForm = createAsyncThunk(
  "post/form",
  async ({ name, phone, email }, thunkAPI) => {
    try {
      const res = await fetch("admin/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email }),
      });
      const form = await res.json();
      return thunkAPI.fulfillWithValue(form);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getForm.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getForm.fulfilled, (state, action) => {
        state.error = null;
        state.form = action.payload;
        state.loading = false;
      })

      .addCase(postForm.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(postForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postForm.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.form = action.payload;
      });
  },
});

export default formSlice.reducer;
