import { configureStore } from '@reduxjs/toolkit';
import { movieSlices } from './features/movie-management';

export const store = configureStore({
  reducer: {
    adminMovies: movieSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;