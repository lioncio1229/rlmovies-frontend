import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setMovies, setEditorOpen, addMovie } from "./slices/movieSlices";

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
        axios.post(endpoints.adminMovies.movies, movie)
        .then(res => {
            if(res.statusText === 'OK')
            {
                dispatch(addMovie(movie));
                handleOnClose();
            }
        })
        .catch((e) => {
            console.error(e);
            navigate('/signin');
        })
    }
    
    const handleOnClose = () => {
        dispatch(setEditorOpen(false));
    }

    return (
        <>
            <MovieListview movies={movies} onAddClick={handleOnAddClick}/>
            {
                isEditorOpen && <InfoEdit onOk={handleInfoSubmit} onClose={handleOnClose}/>
            }
        </>
    )
};