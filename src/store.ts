import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { movieSlices, moviesAPI } from './features/movie-management';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {snackbarSlice} from './features/Snackbar';
import { HeaderReducer } from './layouts/Header';

export const store = configureStore({
  reducer: {
    header: HeaderReducer,
    adminMovies: movieSlices,
    snackbars: snackbarSlice,
    [moviesAPI.reducerPath]: moviesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesAPI.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;