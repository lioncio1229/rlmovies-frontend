import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { movieSlices, moviesAPI } from './features/movie-management';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {snackbarSlice} from './features/Snackbar';

export const store = configureStore({
  reducer: {
    adminMovies: movieSlices,
    snackbars: snackbarSlice,
    [moviesAPI.reducerPath]: moviesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesAPI.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;