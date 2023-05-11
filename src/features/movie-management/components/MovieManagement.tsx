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
        if(getMovieRes.isError) navigate('/signin');
        else getMovieRes.isSuccess && dispatch(setMovies(getMovieRes.data));
    }, [getMovieRes.isSuccess, getMovieRes.isError]);

    if(getMovieRes.isLoading || updateMovieResult.isLoading || addMovieResult.isLoading || deleteMovieResult.isLoading) {
        return <h1>
            Loading...
        </h1>;
    }

    const handleOnAddClick = () => {
        dispatch(setEditorOpen(true));
    }

    const handleInfoSubmit = (movie : MovieInfo) => {
        const _movie : MovieInfo | undefined = movies.find(v => v._id === movie._id);

        if(_movie) triggerUpdateMovie(movie)
        .then((res) => {
            if('data' in res) {
                dispatch(updateMovie(res.data));
                handleOnClose();
            }
            else {
                navigate('/signin');
            }
        });

        else triggerAddMovie(movie)
        .then((res) => {
            if('data' in res) {
                dispatch(addMovie(res.data));
                handleOnClose();
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
        triggerDeleteMovie(id)
        .then(res => {
            if('data' in res){
                dispatch(deleteMovie(id));
                handleOnClose();
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

    const handleFormChange = (name: string, value: string | number) => {
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