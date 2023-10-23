import { createSlice } from "@reduxjs/toolkit";
import {
  handleAuthFullfilled,
  handleAuthPending,
  handleAuthRejected,
  handleCurrentUserFullfilled,
  handleCurrentUserPending,
  handleCurrentUserRejected,
  handleLogOutFullfilled,
  handleLogOutRejected,
  handleRegisterFullfilled,
} from "./authOperations";
import {
  currentUserThunk,
  logOutThunk,
  loginThunk,
  registerThunk,
} from "./authThunk";

const initialState = {
  username: null,
  email: null,
  token: "",
  isAuth: false,
  error: "",
  isLoading: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerThunk.pending, handleAuthPending)
      .addCase(registerThunk.fulfilled, handleRegisterFullfilled)
      .addCase(registerThunk.rejected, handleAuthRejected)
      .addCase(loginThunk.pending, handleAuthPending)
      .addCase(loginThunk.fulfilled, handleAuthFullfilled)
      .addCase(loginThunk.rejected, handleAuthRejected)
      .addCase(logOutThunk.fulfilled, handleLogOutFullfilled)
      .addCase(logOutThunk.rejected, handleLogOutRejected)
      .addCase(currentUserThunk.fulfilled, handleCurrentUserFullfilled)
      .addCase(currentUserThunk.pending, handleCurrentUserPending)
      .addCase(currentUserThunk.rejected, handleCurrentUserRejected),
});

export const authReducer = authSlice.reducer;
