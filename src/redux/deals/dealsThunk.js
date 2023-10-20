import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDeals } from "src/services/api";

export const getDealsThunk = createAsyncThunk(
  "deals/fetchDeals",
  async (_, thunkAPI) => {
    try {
      return await fetchDeals();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
