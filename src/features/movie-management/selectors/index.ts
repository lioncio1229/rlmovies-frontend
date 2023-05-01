import { RootState } from './../../../store';
import { createSelector } from "reselect";
import { MovieInfo } from '../types';


const adminMovies = (state : RootState) => state.adminMovies;


export const selectMovies = createSelector(
    (state: RootState) => adminMovies(state).movies,
    (movies: MovieInfo[]) => movies,
);

export const selectIsEditorOpen = createSelector(
    (state: RootState) => adminMovies(state).isEditorOpen,
    (isEditorOpen: boolean) => isEditorOpen,
);

export const selectMovieInfo = createSelector(
    (state: RootState) => adminMovies(state).movieInfo,
    (movieInfo) => movieInfo,
);