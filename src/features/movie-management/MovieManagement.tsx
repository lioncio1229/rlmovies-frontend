import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "./slices/movieSlices";

import MovieListview from "./components/MovieListview";
import InfoEdit from "./components/InfoEdit";
import { MovieInfo } from "./types";

import axios, {endpoints} from "../../api/axios";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function(){
    const dispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.adminMovies.movies);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(endpoints.adminMovies.getMovies)
        .then(res => {
            console.log(res);
            if(!res.data) return;
            let movieList : MovieInfo[] = res.data;
            dispatch(setMovies(movieList));
        })
        .catch((e) => {
            console.error(e);
            navigate('/signin');
        });
    }, []);

    return (
        <>
            <MovieListview movies={movies}/>
            {/* <InfoEdit/> */}
        </>
    )
};