import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MovieInfoWithId } from "../types";


export interface MoviesState {
    movies: MovieInfoWithId[],
    isEditorOpen: boolean,
    movieInfo: MovieInfoWithId,
}

const initialState : MoviesState = {
    movies: [],
    isEditorOpen: false,
    movieInfo: {
        _id: '',
        title: '',
        description: '',
        price: 0,
        quantity: 0,
        rentalExpiration: '',
    }
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<MovieInfoWithId[]>) => {
            state.movies = action.payload;
        },
        addMovie: (state, action: PayloadAction<MovieInfoWithId>) => {
            state.movies.push(action.payload);
        },
        updateMovie: (state, action: PayloadAction<MovieInfoWithId>) => {
            const updatedMovie = action.payload;
            state.movies = state.movies.map(movie => movie._id === updatedMovie._id ? updatedMovie : movie);
        },
        setEditorOpen: (state, action: PayloadAction<boolean>) => {
            state.isEditorOpen = action.payload;
        },
        updateInfoEditor: (state, action: PayloadAction<MovieInfoWithId>) => {
            state.movieInfo = action.payload;
        }
    }
});


export const { setMovies, addMovie, setEditorOpen, updateInfoEditor } = moviesSlice.actions;

export default moviesSlice.reducer;