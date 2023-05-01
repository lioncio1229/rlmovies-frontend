import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import {
  setMovies,
  setEditorOpen,
  addMovie,
  updateInfoEditor,
  clearInfoEditor,
  updateMovie,
  deleteMovie,
} from "./slices/movieSlices";

import MovieListview from "./components/MovieListview";
import InfoEdit from "./components/InfoEdit";
import { MovieInfo } from "./types";

import axios, {endpoints} from "../../api/axios";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function(){
    const dispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.adminMovies.movies);
    const isEditorOpen = useSelector((state: RootState) => state.adminMovies.isEditorOpen);
    const movieInfo = useSelector((state: RootState) => state.adminMovies.movieInfo)

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(endpoints.adminMovies.movies)
        .then(res => {
            if(res.statusText === 'OK')
            {
                console.log(res);
                if(!res.data) return;
                let movieList : MovieInfo[] = res.data;
                dispatch(setMovies(movieList));
            }
        })
        .catch((e) => {
            console.error(e);
            navigate('/signin');
        });
    }, []);

    const handleOnAddClick = () => {
        dispatch(setEditorOpen(true));
    }

    const handleInfoSubmit = (movie : MovieInfo) => {
        const _movie : MovieInfo | undefined = movies.find(v => v._id === movie._id);
        
        const movieCopy : { [key: string]: string | number } = {
            title: movie.title,
            description: movie.description,
            quantity: movie.quantity,
            price: movie.price,
            rentalExpiration: movie.rentalExpiration,
        };

        if(_movie)
        {
            axios.put(endpoints.adminMovies.movies + '/' + _movie._id, movieCopy)
            .then(res => {
                if(res.statusText === 'OK' && movie)
                {
                    movieCopy._id = movie._id;
                    dispatch(updateMovie(movieCopy as MovieInfo));
                    handleOnClose();
                }
            })
            .catch((e) => {
                console.error(e);
                navigate('/signin');
            })
            return;
        }

        axios.post(endpoints.adminMovies.movies, movieCopy)
        .then(res => {
            if(res.statusText === 'OK' && movie)
            {
                movieCopy._id = res.data;
                dispatch(addMovie(movieCopy as MovieInfo));
                handleOnClose();
            }
        })
        .catch((e) => {
            console.error(e);
            navigate('/signin');
        })
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