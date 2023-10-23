export const handleAuthFullfilled = (state, { payload }) => {
  state.username = payload.username;
  state.email = payload.email;
  state.token = payload.token;
  state.isAuth = true;
  state.error = null;
  state.isLoading = false;
};

export const handleAuthPending = (state) => {
  state.isLoading = true;
};

export const handleRegisterFullfilled = (state) => {
  state.error = null;
  state.isLoading = false;
};

export const handleAuthRejected = (state, { payload }) => {
  state.username = null;
  state.email = null;
  state.token = "";
  state.isAuth = false;
  state.error = payload;
  state.isLoading = false;
};

export const handleLogOutFullfilled = (state) => {
  state.username = null;
  state.email = null;
  state.token = "";
  state.isAuth = false;
  state.error = "";
  state.items = [];
  state.isLoading = false;
};

export const handleLogOutRejected = (state, { payload }) => {
  state.username = null;
  state.email = null;
  state.token = "";
  state.isAuth = false;
  state.error = payload;
  state.items = [];
  state.isLoading = false;
};

export const handleCurrentUserFullfilled = (state, { payload }) => {
  state.username = payload.username;
  state.email = payload.email;
  state.isAuth = true;
  state.isFetchingCurrentUser = false;
  state.isLoading = false;
};

export const handleCurrentUserPending = (state) => {
  state.isFetchingCurrentUser = true;
  state.isLoading = true;
};

export const handleCurrentUserRejected = (state, { payload }) => {
  state.isFetchingCurrentUser = false;
  state.error = payload;
  state.isLoading = false;
};
