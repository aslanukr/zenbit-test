import { createAsyncThunk, current } from "@reduxjs/toolkit";
import { logIn, logOut, registerUser } from "src/services/api";

export const registerThunk = createAsyncThunk(
  "users/register",
  async (credentials, thunkAPI) => {
    try {
      await registerUser(credentials);
    } catch (e) {
      console.log(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "users/login",
  async (credentials, thunkAPI) => {
    try {
      return await logIn(credentials);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "users/logout",
  async (credentials, thunkAPI) => {
    try {
      return await logOut(credentials);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    try {
      const response = await current();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
