import { createAsyncThunk } from "@reduxjs/toolkit";
import { logIn, logOut, registerUser } from "src/services/api";

export const registerThunk = createAsyncThunk(
  "users/register",
  async (credentials, thunkAPI) => {
    try {
      return await registerUser(credentials);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "users/login",
  async (credentials, thunkAPI) => {
    try {
      return await logIn(credentials);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
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

// export const currentUserThunk = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue();
//     }
//     token.set(persistedToken);

//     try {
//       const response = await current();

//       return response.data;
//     } catch (e) {
//       token.unset();
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
