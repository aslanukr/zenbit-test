export const selectDeals = (state) => state.deals.items;
export const selectIsLoading = (state) => state.deals.isLoading;
export const selectDealsError = (state) => state.deals.error;

// export const selectIsAuth = (state) => state.auth.isAuth;
// export const selectAccessToken = (state) => state.auth.token;
// export const selectEmail = (state) => state.auth.user.email;
// export const selectAuthError = (state) => state.auth.error;
// export const selectFetchingCurrentUser = (state) =>
//   state.auth.isFetchingCurrentUser;
