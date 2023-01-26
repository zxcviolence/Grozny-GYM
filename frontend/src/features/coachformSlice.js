import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  coachform: [],
  loading: false,
  error: null,
};

export const getForm = createAsyncThunk("get/form", async (_, thunkAPI) => {
  try {
    const res = await fetch("/admin/coachform");
    const form = await res.json();

    if (form.error) {
      return thunkAPI.rejectWithValue(form.error);
    }
    return thunkAPI.fulfillWithValue(form);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const postForm = createAsyncThunk(
  "post/form",
  async ({ name, phone, weight, isSport }, thunkAPI) => {
    try {
      const res = await fetch("admin/coachform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, weight, isSport }),
      });
      const form = await res.json();
      return thunkAPI.fulfillWithValue(form);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteForm = createAsyncThunk(
  "delete/form",
  async ({ id }, thunkAPI) => {
    try {
      await fetch(`/admin/coachform/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: "Ошибка при удалении" });
    }
  }
);

const coachformSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
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
        state.coachform = action.payload;
        state.loading = false;
      })
      // POST
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
        state.coachform = action.payload;
      })
      // DELETE
      .addCase(deleteForm.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteForm.pending, (state, action) => {
        state.error = null;
        state.coachform = state.coachform.map((item) => {
          if (item._id === action.meta.arg._id) {
            item.loading = true;
          }
          return item;
        });
        state.loading = true;
      })
      .addCase(deleteForm.fulfilled, (state, action) => {
        state.error = null;
        state.coachform = state.coachform.filter((item) => {
          return item._id !== action.payload;
        });
        state.loading = false;
      });
  },
});

export default coachformSlice.reducer;
