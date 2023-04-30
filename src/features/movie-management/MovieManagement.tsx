import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setMovies, setEditorOpen, addMovie, updateInfoEditor, clearInfoEditor } from "./slices/movieSlices";

import MovieListview from "./components/MovieListview";
import InfoEdit from "./components/InfoEdit";
import { MovieInfo, InputEvents } from "./types";

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
        const movieCopy : { [key: string]: string | number } = {
            title: movie.title,
            description: movie.description,
            quantity: movie.quantity,
            price: movie.price,
            rentalExpiration: movie.rentalExpiration,
        };
        axios.post(endpoints.adminMovies.movies, movieCopy)
        .then(res => {
            if(res.statusText === 'OK' && movie)
            {
                movieCopy._id = res.data;
                dispatch(addMovie(movieCopy as MovieInfo));
                dispatch(clearInfoEditor());
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
        
    }

    const handleOnClose = () => {
        dispatch(setEditorOpen(false));
    }

    const inputs : InputEvents = {
        onTitleChange: title => {
            dispatch(updateInfoEditor({...movieInfo, title}));
        },
        onDescriptionChange: description => {
            dispatch(updateInfoEditor({...movieInfo, description}));
        },
        onPriceChange: price => {
            dispatch(updateInfoEditor({...movieInfo, price}));
        },
        onQuantityChange: quantity => {
            dispatch(updateInfoEditor({...movieInfo, quantity}));
        },
        onExpirationChange: rentalExpiration => {
            dispatch(updateInfoEditor({...movieInfo, rentalExpiration}));
        }
    }

    return (
        <>
            <MovieListview movies={movies} onAddClick={handleOnAddClick} onEditClick={handleOnEdit}/>
            {
                isEditorOpen && <InfoEdit onOk={handleInfoSubmit} onClose={handleOnClose} inputEvents={inputs} values={movieInfo}/>
            }
        </>
    )
};