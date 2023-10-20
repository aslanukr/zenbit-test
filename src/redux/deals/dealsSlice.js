import { createSlice } from "@reduxjs/toolkit";
import { getDealsThunk } from "./dealsThunk";

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const dealsSlice = createSlice({
  name: "deals",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDealsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = "";
        state.items = payload;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const dealsReducer = dealsSlice.reducer;
