import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MovieInfo } from "../types";


export interface MoviesState {
    movies: MovieInfo[],
    isEditorOpen: boolean,
}

const initialState : MoviesState = {
    movies: [],
    isEditorOpen: false,
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<MovieInfo[]>) => {
            state.movies = action.payload;
        },
        addMovie: (state, action: PayloadAction<MovieInfo>) => {
            state.movies.push(action.payload);
        },
        setEditorOpen: (state, action: PayloadAction<boolean>) => {
            state.isEditorOpen = action.payload;
        }
    }
});


export const { setMovies, addMovie, setEditorOpen } = moviesSlice.actions;

export default moviesSlice.reducer;