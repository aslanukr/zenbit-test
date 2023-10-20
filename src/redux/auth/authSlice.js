import { createSlice } from "@reduxjs/toolkit";
import {
  handleAuthFullfilled,
  handleAuthRejected,
  handleLogOutFullfilled,
  handleLogOutRejected,
} from "./authOperations";
import { logOutThunk, loginThunk, registerThunk } from "./authThunk";

const initialState = {
  user: { email: null },
  token: "",
  isAuth: false,
  error: "",
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerThunk.fulfilled, handleAuthFullfilled)
      .addCase(registerThunk.rejected, handleAuthRejected)
      .addCase(loginThunk.fulfilled, handleAuthFullfilled)
      .addCase(loginThunk.rejected, handleAuthRejected)
      .addCase(logOutThunk.fulfilled, handleLogOutFullfilled)
      .addCase(logOutThunk.rejected, handleLogOutRejected),
  //   .addCase(currentUserThunk.fulfilled, handleCurrentUserFullfilled)
  //   .addCase(currentUserThunk.pending, handleCurrentUserPending)
  //   .addCase(currentUserThunk.rejected, handleCurrentUserRejected),
});

export const authReducer = authSlice.reducer;
