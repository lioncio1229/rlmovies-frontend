import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MovieInfo } from "../types";


export interface MoviesState {
    movies: MovieInfo[]
}


const initialState : MoviesState = {
    movies: []
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<MovieInfo[]>) => {
            state.movies = action.payload;
        }
    }
});


export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;