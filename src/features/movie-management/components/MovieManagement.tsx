import { useDispatch, useSelector } from "react-redux";
import {
  setMovies,
  setEditorOpen,
  addMovie,
  updateInfoEditor,
  clearInfoEditor,
  updateMovie,
  deleteMovie,
} from "../slices/movieSlices";

import { selectMovies, selectIsEditorOpen, selectMovieInfo } from "../selectors";

import MovieListview from "./MovieListview";
import InfoEdit from "./InfoEdit";
import { MovieInfo } from "../types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  useGetMoviesQuery,
  useUpdateMovieMutation,
  useAddMovieMutation,
  useDeleteMovieMutation,
} from "../api";

import { addSnackbar, popSnackbar } from "../../Snackbar/slices";
import { showLoading } from "../../../layouts/Header/slices";

export default function(){
    const dispatch = useDispatch();

    const movies = useSelector(selectMovies);
    const isEditorOpen = useSelector(selectIsEditorOpen);
    const movieInfo = useSelector(selectMovieInfo);

    const navigate = useNavigate();

    const getMovieRes = useGetMoviesQuery();
    const [triggerUpdateMovie, updateMovieResult] = useUpdateMovieMutation();
    const [triggerAddMovie, addMovieResult] = useAddMovieMutation();
    const [triggerDeleteMovie, deleteMovieResult] = useDeleteMovieMutation();

    useEffect(() => {
        if(getMovieRes.isError) { 
            dispatch(showLoading(false));
            navigate('/signin');
        }
        else if (getMovieRes.isSuccess) {
            dispatch(setMovies(getMovieRes.data));
            dispatch(showLoading(false));
        }
        else if(getMovieRes.isFetching)
        {
            dispatch(showLoading(true));
        }
    }, [getMovieRes.isFetching, getMovieRes.isSuccess, getMovieRes.isError]);

    const handleOnAddClick = () => {
        dispatch(setEditorOpen(true));
    }

    const handleInfoSubmit = (movie : MovieInfo) => {
        const _movie : MovieInfo | undefined = movies.find(v => v._id === movie._id);
        handleOnClose();
        dispatch(addSnackbar({status: 'processing', message: 'Updating movie'}));

        if(_movie) triggerUpdateMovie(movie)
        .then((res) => {
            if('data' in res) {
                dispatch(updateMovie(res.data));
                dispatch(popSnackbar());
                dispatch(addSnackbar({status: 'success', message: 'Movie Updated'}))
            }
            else {
                navigate('/signin');
            }
        });

        else triggerAddMovie(movie)
        .then((res) => {
            if('data' in res) {
                dispatch(popSnackbar());
                dispatch(addSnackbar({status: 'success', message: 'Movie Added'}))
                dispatch(addMovie(res.data));
            }
            else {
                navigate('/signin');
            }
        });
    }
    
    const handleOnEdit = (id: string | undefined) => {
        if(!id) return;

        dispatch(setEditorOpen(true));
        const movie = movies.find(movie => movie._id === id);
        movie && dispatch(updateInfoEditor(movie));
    }

    const handleOnDelete = (id: string) => {
        dispatch(addSnackbar({status: 'processing', message: 'Deleting movie'}));
        handleOnClose();
        triggerDeleteMovie(id)
        .then(res => {
            if('data' in res){
                dispatch(popSnackbar());
                dispatch(addSnackbar({status: 'success', message: 'Movie Deleted'}))
                dispatch(deleteMovie(id));
            }
            else{
                navigate('/signin');
            }
        });
    }

    const handleOnClose = () => {
        dispatch(clearInfoEditor());
        dispatch(setEditorOpen(false));
    }

    const handleFormChange = (name: string, value: string | number | FileList) => {
        if(name === 'image')
        {
            const files = value as FileList;
            name = 'imageUrl';
            value = URL.createObjectURL(files[0]);
        }
        dispatch(updateInfoEditor({...movieInfo, [name]: value}));
    }

    return (
        <>
            <MovieListview movies={movies} onAddClick={handleOnAddClick} onEditClick={handleOnEdit}/>
            {
                isEditorOpen && <InfoEdit onOk={handleInfoSubmit} onClose={handleOnClose} onFormChange={handleFormChange} onDelete={handleOnDelete} values={movieInfo}/>
            }
        </>
    )
};