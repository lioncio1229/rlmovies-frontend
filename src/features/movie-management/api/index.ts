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
      transformResponse: (response, meta, arg) : MovieInfo => arg as MovieInfo,
      transformErrorResponse: (response: {status: string | number}, meta, arg) => response.status,
    })
  }),
});

export const { useGetMoviesQuery, useUpdateMovieMutation } = moviesAPI;