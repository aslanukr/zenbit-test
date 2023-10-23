import { createAction, createSlice } from "@reduxjs/toolkit";
import { getDealsThunk } from "./dealsThunk";

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFullfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = "";
  state.items = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const resetDealsState = createAction("deals/resetState");

export const dealsSlice = createSlice({
  name: "deals",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDealsThunk.pending, handlePending)
      .addCase(getDealsThunk.fulfilled, handleFullfilled)
      .addCase(getDealsThunk.rejected, handleRejected)
      .addCase(resetDealsState, (state) => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const dealsReducer = dealsSlice.reducer;
