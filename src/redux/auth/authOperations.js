export const handleAuthFullfilled = (state, { payload }) => {
  state.username = payload.username;
  state.email = payload.email;
  state.token = payload.token;
  state.isAuth = true;
  state.error = null;
};

export const handleRegisterFullfilled = (state) => {
  state.error = null;
};

export const handleAuthRejected = (state, { payload }) => {
  state.username = null;
  state.email = null;
  state.token = "";
  state.isAuth = false;
  state.error = payload;
};

export const handleLogOutFullfilled = (state) => {
  state.username = null;
  state.email = null;
  state.token = "";
  state.isAuth = false;
  state.error = "";
  state.items = [];
};

export const handleLogOutRejected = (state, { payload }) => {
  state.username = null;
  state.email = null;
  state.token = "";
  state.isAuth = false;
  state.error = payload;
  state.items = [];
};

export const handleCurrentUserFullfilled = (state, { payload }) => {
  state.username = payload.username;
  state.email = payload.email;
  state.isAuth = true;
  state.isFetchingCurrentUser = false;
};

export const handleCurrentUserPending = (state) => {
  state.isFetchingCurrentUser = true;
};

export const handleCurrentUserRejected = (state, { payload }) => {
  state.isFetchingCurrentUser = false;
  state.error = payload;
};
