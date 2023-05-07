import { useDispatch } from "react-redux";
import {
  setMovies,
  setEditorOpen,
  addMovie,
  updateInfoEditor,
  clearInfoEditor,
  updateMovie,
  deleteMovie,
} from "../slices/movieSlices";

import MovieListview from "./MovieListview";
import InfoEdit from "./InfoEdit";
import { MovieInfo } from "../types";

import axios, {endpoints} from "../../../api/axios";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useGetMoviesQuery, useUpdateMovieMutation } from "../api";

type Props = {
    movies: MovieInfo[],
    isEditorOpen: boolean,
    movieInfo: MovieInfo,
}

export default function({movies, isEditorOpen, movieInfo} : Props){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getMovieRes = useGetMoviesQuery();
    const [triggerUpdateMovie, result] = useUpdateMovieMutation();
    
    useEffect(() => {
        if(getMovieRes.isError)
        {
            navigate('/signin');
        }
        else getMovieRes.isSuccess && dispatch(setMovies(getMovieRes.data));
    }, [getMovieRes.isSuccess, getMovieRes.isError]);


    useEffect(() => {
        if(result.isError)
        {
            console.log('HAS ERROR');
        }
        if(result.data)
        {
            dispatch(updateMovie(result.data));
            handleOnClose();
        }
        console.log('result: ', result);
    }, [result.isSuccess, result.isError]);

    if(getMovieRes.isLoading || result.isLoading) {
        return <h1>
            Loading...
        </h1>;
    }

    const handleOnAddClick = () => {
        dispatch(setEditorOpen(true));
    }

    const handleInfoSubmit = (movie : MovieInfo) => {
        triggerUpdateMovie(movie);

        // const _movie : MovieInfo | undefined = movies.find(v => v._id === movie._id);
        
        // const movieCopy : { [key: string]: string | number } = {
        //     title: movie.title,
        //     description: movie.description,
        //     quantity: movie.quantity,
        //     price: movie.price,
        //     rentalExpiration: movie.rentalExpiration,
        // };

        // if(_movie)
        // {
        //     axios.put(endpoints.adminMovies.movies + '/' + _movie._id, movieCopy)
        //     .then(res => {
        //         if(res.statusText === 'OK' && movie)
        //         {
        //             movieCopy._id = movie._id;
        //             dispatch(updateMovie(movieCopy as MovieInfo));
        //             handleOnClose();
        //         }
        //     })
        //     .catch((e) => {
        //         console.error(e);
        //         navigate('/signin');
        //     })
        //     return;
        // }

        // axios.post(endpoints.adminMovies.movies, movieCopy)
        // .then(res => {
        //     if(res.statusText === 'OK' && movie)
        //     {
        //         movieCopy._id = res.data;
        //         dispatch(addMovie(movieCopy as MovieInfo));
        //         handleOnClose();
        //     }
        // })
        // .catch((e) => {
        //     console.error(e);
        //     navigate('/signin');
        // })
    }
    
    const handleOnEdit = (id: string | undefined) => {
        if(!id) return;

        dispatch(setEditorOpen(true));
        const movie = movies.find(movie => movie._id === id);
        movie && dispatch(updateInfoEditor(movie));
    }

    const handleOnDelete = (id: string) => {
        axios.delete(endpoints.adminMovies.movies + '/' + id)
        .then(res => {
            dispatch(deleteMovie(id));
            handleOnClose();
        })
        .catch((e) => {
            console.error(e);
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