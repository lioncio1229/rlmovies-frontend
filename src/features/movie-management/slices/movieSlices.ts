import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MovieInfo, MoviesState } from "../types";


export const initialState : MoviesState = {
    movies: [],
    isEditorOpen: false,
    movieInfo: {
        _id: '',
        title: '',
        description: '',
        price: 0,
        quantity: 0,
        rentalExpiration: '',
        imageUrl: '',
    }
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
        updateMovie: (state, action: PayloadAction<MovieInfo>) => {
            const updatedMovie = action.payload;
            state.movies = state.movies.map(movie => movie._id === updatedMovie._id ? updatedMovie : movie);
        },
        deleteMovie: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.movies = state.movies.filter(movie => movie._id !== id);
        },
        setEditorOpen: (state, action: PayloadAction<boolean>) => {
            state.isEditorOpen = action.payload;
        },
        updateInfoEditor: (state, action: PayloadAction<MovieInfo>) => {
            state.movieInfo = action.payload;
        },
        clearInfoEditor: (state) => {
            state.movieInfo = initialState.movieInfo;
        }
    }
});


export const { setMovies, addMovie, updateMovie, deleteMovie, setEditorOpen, updateInfoEditor, clearInfoEditor } = moviesSlice.actions;

export default moviesSlice.reducer;