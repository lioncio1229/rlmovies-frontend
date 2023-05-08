import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {api} from '../../../../config.json'
import { MovieInfo } from '../types';

export const moviesAPI = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: api.base.dev }),
  endpoints: (builder) => ({
    
    getMovies: builder.query<MovieInfo[], void>({
      query: () => ({url: `movies/`, credentials: 'include'}),
    }),

    updateMovie: builder.mutation<MovieInfo, Partial<MovieInfo> & Pick<MovieInfo, '_id'>>({
      query: ({_id, ...others}) => ({url: `movies/${_id}`, method: 'PUT', credentials: 'include', body: others}),
      transformResponse: (response, meta, arg) => arg as MovieInfo,
      transformErrorResponse: (response: {status: string | number}, meta, arg) => response.status,
    }),
    
    addMovie: builder.mutation<MovieInfo, Partial<MovieInfo>>({
      query: ({_id, ...others}) => ({url: 'movies', method: 'POST', credentials: 'include', body: others}),
      transformResponse: (response: string, meta, arg) => ({...arg, _id: response}) as MovieInfo,
      transformErrorResponse: (response: {status: string | number}, meta, arg) => response.status,
    }),
    
    deleteMovie: builder.mutation<string, string>({
      query: (_id) => ({url: `movies/${_id}`, method: 'DELETE', credentials: 'include'}),
      transformResponse: (response: {data: string}, meta, arg) => response.data,
      transformErrorResponse: (response: {status: string | number}, meta, arg) => response.status,
    }),
  }),
});

export const { useGetMoviesQuery, useUpdateMovieMutation, useAddMovieMutation, useDeleteMovieMutation } = moviesAPI;