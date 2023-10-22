import { createAsyncThunk } from "@reduxjs/toolkit";
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
